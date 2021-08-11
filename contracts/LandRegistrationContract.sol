// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract LandRegistrationContract {
    address creator;
    uint256 totalProperties;

    // (Address => User)
    mapping(address => User) public users;

    // (CNIC || id => Status) Users
    mapping(uint256 => bool) public verifiedUsers;

    // (PropertyID => PropertyDetails)
    mapping(uint256 => Property) public properties;

    // (PropertyID => NewOwner)
    mapping(uint256 => address) public propOwnerChange;

    // (address => Assets)
    mapping(address => uint256[]) public assets;

    enum UserVerfication {
        NotExist,
        Pending,
        Approved,
        Rejected
    }
    enum PropertyVerfication {
        NotExist,
        Pending,
        Approved,
        Rejected
    }
    enum UserType {
        NotExist,
        User,
        Registrar,
        Admin,
        Creator
    }

    struct User {
        uint256 id;
        string name;
        string district;
        UserVerfication verification;
        UserType userType;
        uint256 totalAssests;
        uint256[] assets;
    }

    struct Property {
        uint256 id;
        address currentOwner;
        uint256 price;
        string district;
        string latitude;
        string longitude;
        bool forSale;
        PropertyVerfication verification;
    }

    modifier onlyOwner(uint256 _propId) {
        require(properties[_propId].currentOwner == msg.sender, "Not Owner");
        _;
    }

    modifier OnlyVerifiedUsers() {
        require(
            verifiedUsers[users[msg.sender].id] == true,
            "Not a verified User"
        );
        require(
            users[msg.sender].verification == UserVerfication.Approved,
            "Not Verified User"
        );
        _;
    }

    modifier OnlyVerifiedProperty(uint256 _id) {
        require(
            properties[_id].verification == PropertyVerfication.Approved,
            "Not a verified Property"
        );
        _;
    }

    modifier OnlyRegistrar() {
        require(
            users[msg.sender].userType == UserType.Registrar,
            "Not a Registrar"
        );
        _;
    }

    modifier OnlyAdmin() {
        require(
            users[msg.sender].userType == UserType.Admin ||
                users[msg.sender].userType == UserType.Creator,
            "Not Admin"
        );
        _;
    }

    modifier sameDistrict(string memory _district) {
        require(
            keccak256(bytes(users[msg.sender].district)) ==
                keccak256(bytes(_district)) ||
                users[msg.sender].userType == UserType.Creator,
            "Not Same District"
        );
        _;
    }

    constructor(
        uint256 _CNIC,
        string memory _name,
        string memory _district
    ) {
        creator = msg.sender;
        User memory newUser;
        newUser.id = _CNIC;
        newUser.name = _name;
        newUser.district = _district;
        newUser.verification = UserVerfication.Approved;
        newUser.userType = UserType.Creator;
        newUser.totalAssests = 0;

        users[creator] = newUser;
    }

    // Add New User.
    function addNewUser(
        address _newUser,
        uint256 _CNIC,
        string memory _name,
        string memory _district
    ) external returns (bool Successful) {
        require(users[_newUser].userType == UserType.NotExist, "User Exist");
        require(verifiedUsers[_CNIC] == false, "CNIC Registared Already");
        uint256[] memory asset;
        users[_newUser] = User(
            _CNIC,
            _name,
            _district,
            UserVerfication.Pending,
            UserType.User,
            0,
            asset
        );
        return true;
    }

    // Add New Registrar.
    function addNewRegistrar(
        address _newUser,
        uint256 _CNIC,
        string memory _name,
        string memory _district
    ) external OnlyAdmin() sameDistrict(_district) returns (bool Successful) {
        require(users[_newUser].userType == UserType.NotExist, "User Exist");
        uint256[] memory asset;
        users[_newUser] = User(
            _CNIC,
            _name,
            _district,
            UserVerfication.Approved,
            UserType.Registrar,
            0,
            asset
        );
        return true;
    }

    // Add New Admin.
    function addNewAdmin(
        address _newUser,
        uint256 _CNIC,
        string memory _name,
        string memory _district
    ) external OnlyAdmin() sameDistrict(_district) returns (bool Successful) {
        require(users[_newUser].userType == UserType.NotExist, "User Exist");
        uint256[] memory asset;
        users[_newUser] = User(
            _CNIC,
            _name,
            _district,
            UserVerfication.Approved,
            UserType.Admin,
            0,
            asset
        );
        return true;
    }

    // Approve New User.
    function approveUserAccept(address _verifiedUser)
        external
        OnlyRegistrar()
        sameDistrict(users[_verifiedUser].district)
    {
        require(
            users[_verifiedUser].verification == UserVerfication.Pending,
            "Verification Not Requested"
        );
        require(verifiedUsers[users[_verifiedUser].id] == false);
        users[_verifiedUser].verification = UserVerfication.Approved;
        verifiedUsers[users[_verifiedUser].id] = true;
    }

    // Reject New User.
    function approveUserReject(address _rejectedUser)
        external
        OnlyRegistrar()
        sameDistrict(users[_rejectedUser].district)
    {
        require(
            users[_rejectedUser].verification == UserVerfication.Pending,
            "Verification Not Requested"
        );
        require(verifiedUsers[users[_rejectedUser].id] == false);
        uint256[] memory asset;
        users[_rejectedUser] = User(
            0,
            "",
            "",
            UserVerfication.NotExist,
            UserType.NotExist,
            0,
            asset
        );
        verifiedUsers[users[_rejectedUser].id] = false;
    }

    // Create a new Property.
    function createProperty(
        address payable _owner,
        uint256 _price,
        string memory _district,
        string memory _latitude,
        string memory _longitude
    )
        external
        OnlyRegistrar()
        sameDistrict(_district)
        returns (bool Successful)
    {
        require(users[_owner].verification == UserVerfication.Approved);
        properties[totalProperties] = Property(
            totalProperties,
            _owner,
            _price,
            _district,
            _latitude,
            _longitude,
            false,
            PropertyVerfication.Pending
        );
        addAsset(_owner, totalProperties);
        totalProperties++;
        return true;
    }

    // Approve new Property.
    function approveProperty(uint256 _propId)
        external
        OnlyAdmin()
        sameDistrict(properties[_propId].district)
        returns (bool Successful)
    {
        require(
            properties[_propId].verification == PropertyVerfication.Pending,
            "Verification Not Requested"
        );
        require(
            properties[_propId].currentOwner != msg.sender,
            "Owner Cannot Approve"
        );
        properties[_propId].verification = PropertyVerfication.Approved;
        return true;
    }

    // Reject new Property.
    function rejectProperty(uint256 _propId)
        external
        OnlyAdmin
        sameDistrict(properties[_propId].district)
        returns (bool Successful)
    {
        require(
            properties[_propId].verification == PropertyVerfication.Pending,
            "Verification Not Requested"
        );
        require(
            properties[_propId].currentOwner != msg.sender,
            "Owner Cannot Reject"
        );
        properties[totalProperties] = Property(
            0,
            0x0000000000000000000000000000000000000000,
            0,
            "0",
            "0",
            "0",
            false,
            PropertyVerfication.NotExist
        );
        return true;
    }

    // Change the price of the property.
    function changePrice(uint256 _propId, uint256 _newValue)
        external
        onlyOwner(_propId)
        returns (bool Successful)
    {
        require(properties[_propId].forSale == false, "Property For Sale");
        require(
            propOwnerChange[_propId] == address(0),
            "Property Owner Change Request Pending"
        );
        properties[_propId].price = _newValue;
        return true;
    }

    // For Sale
    function sellProperty(uint256 _propId)
        external
        OnlyVerifiedUsers()
        OnlyVerifiedProperty(_propId)
        returns (bool Successful)
    {
        require(
            properties[_propId].forSale == false,
            "Property Already For Sale"
        );
        require(
            properties[_propId].currentOwner == msg.sender,
            "Only Owner Can Sell"
        );
        properties[_propId].forSale = true;
        return true;
    }

    // Not For Sale
    function NotForSale(uint256 _propId) external returns (bool Successful) {
        require(
            properties[_propId].forSale == true,
            "Property Already Not For Sale"
        );
        require(
            properties[_propId].currentOwner == msg.sender,
            "Only Owner Can Remove Property From Sale"
        );
        properties[_propId].forSale = false;
        return true;
    }

    // Request Purchase.
    function requestPurchase(uint256 _propId, address payable _newOwner)
        external
        OnlyVerifiedUsers()
        returns (bool Successful)
    {
        require(properties[_propId].forSale == true, "Property Not For Sale");
        require(
            properties[_propId].currentOwner != _newOwner,
            "Owner Can not Buy His/Her Own Asset Again"
        );
        require(
            propOwnerChange[_propId] == address(0),
            "Property Owner Change Request Pending"
        );
        propOwnerChange[_propId] = _newOwner;
        properties[_propId].forSale = false;
        return true;
    }

    // Approve change in Onwership.
    function approvePurchase(uint256 _propId)
        external
        OnlyAdmin()
        sameDistrict(properties[_propId].district)
        returns (bool Successful)
    {
        require(properties[_propId].forSale == false, "Property Not For Sale");
        require(
            propOwnerChange[_propId] != address(0),
            "Property Owner Change Request Not Pending"
        );
        address newPropertyOwner = propOwnerChange[_propId];
        addAsset(newPropertyOwner, _propId);
        removeAsset(_propId);
        properties[_propId].currentOwner = propOwnerChange[_propId];
        propOwnerChange[_propId] = address(0);
        return true;
    }

    // Reject change in Onwership.
    function rejectPurchase(uint256 _propId)
        external
        OnlyAdmin()
        sameDistrict(properties[_propId].district)
        returns (bool Successful)
    {
        require(properties[_propId].forSale == false, "Property Not For Sale");
        require(
            propOwnerChange[_propId] != address(0),
            "Property Rejected Already"
        );
        propOwnerChange[_propId] = address(0);
        return true;
    }

    // Add Assets
    function addAsset(address _newOwner, uint256 _addAsset)
        internal
        returns (bool Successful)
    {
        assets[_newOwner].push(_addAsset);
        users[_newOwner].totalAssests += 1;
        return true;
    }

    // Remove Assets
    function removeAsset(uint256 _removeAsset)
        internal
        returns (bool Successful)
    {
        address propertyOwner = properties[_removeAsset].currentOwner;
        uint256[] memory asset = users[propertyOwner].assets;
        uint256 i;
        for (i = 0; i < asset.length; i++) {
            if (asset[i] == asset[_removeAsset]) {
                assets[propertyOwner].push(i);
                users[propertyOwner].totalAssests -= 1;
                return true;
            }
        }
        return false;
    }

    receive() external payable {}
}
