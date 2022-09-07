// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Contract {
    address public _owner;
    uint256 public _value;

    constructor() {
        _owner = msg.sender;
    }

    modifier onlyOwner() {
        require(
            msg.sender == _owner,
            "This function can be called by owner only"
        );
        _;
    }

    function setValue(uint256 value_) public onlyOwner {
       _value = value_;
    }

    function getValue( ) public view returns (uint256) {
       return _value;
    }

}
