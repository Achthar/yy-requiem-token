// SPDX-License-Identifier: MIT

pragma solidity 0.8.4;

import "./IERC20.sol";

interface IRewardToken is IERC20 {
    function mint(address _recipient, uint256 _amount) external;
}
