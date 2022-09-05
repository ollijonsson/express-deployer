// SPDX-License-Identifier: Unlicenced

pragma solidity ^0.8.0;

interface UniswapFactory {
    function allPairs(uint256) external view returns (address pair);

    function allPairsLength() external view returns (uint256);
}

contract TestContract {

    mapping(bytes4 => bool) private isDuplicate;

    function getNewestPair(address factoryAddress)
        public
        view
        returns (address)
    {
        uint256 numPairs = UniswapFactory(factoryAddress).allPairsLength();
        address newestPair = UniswapFactory(factoryAddress).allPairs(numPairs - 1);
        return newestPair;
    }
}
