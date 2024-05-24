import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MetaSoccerToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const metaSoccerTokenAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'treasury', internalType: 'address', type: 'address' },
      { name: 'initialSupply', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MINTER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'PAUSER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getRoleMember',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleMemberCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const metaSoccerTokenAddress = {
  137: '0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1',
} as const

/**
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const metaSoccerTokenConfig = {
  address: metaSoccerTokenAddress,
  abi: metaSoccerTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721Abi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'tokenId', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'operator', type: 'address', indexed: true },
      { name: 'approved', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'tokenId', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'operator', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'id', type: 'uint256' },
      { name: 'data', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', type: 'address' },
      { name: 'approved', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'index', type: 'uint256' },
    ],
    name: 'tokenByIndex',
    outputs: [{ name: 'tokenId', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'tokeId', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useReadMetaSoccerToken = /*#__PURE__*/ createUseReadContract({
  abi: metaSoccerTokenAbi,
  address: metaSoccerTokenAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useReadMetaSoccerTokenDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"MINTER_ROLE"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useReadMetaSoccerTokenMinterRole =
  /*#__PURE__*/ createUseReadContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'MINTER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"PAUSER_ROLE"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useReadMetaSoccerTokenPauserRole =
  /*#__PURE__*/ createUseReadContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'PAUSER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useReadMetaSoccerTokenAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useReadMetaSoccerTokenBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useReadMetaSoccerTokenDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useReadMetaSoccerTokenGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"getRoleMember"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useReadMetaSoccerTokenGetRoleMember =
  /*#__PURE__*/ createUseReadContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'getRoleMember',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"getRoleMemberCount"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useReadMetaSoccerTokenGetRoleMemberCount =
  /*#__PURE__*/ createUseReadContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'getRoleMemberCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"hasRole"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useReadMetaSoccerTokenHasRole =
  /*#__PURE__*/ createUseReadContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useReadMetaSoccerTokenName = /*#__PURE__*/ createUseReadContract({
  abi: metaSoccerTokenAbi,
  address: metaSoccerTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"paused"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useReadMetaSoccerTokenPaused = /*#__PURE__*/ createUseReadContract(
  {
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'paused',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useReadMetaSoccerTokenSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useReadMetaSoccerTokenSymbol = /*#__PURE__*/ createUseReadContract(
  {
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'symbol',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useReadMetaSoccerTokenTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWriteMetaSoccerToken = /*#__PURE__*/ createUseWriteContract({
  abi: metaSoccerTokenAbi,
  address: metaSoccerTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWriteMetaSoccerTokenApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"burn"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWriteMetaSoccerTokenBurn = /*#__PURE__*/ createUseWriteContract(
  {
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'burn',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"burnFrom"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWriteMetaSoccerTokenBurnFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'burnFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWriteMetaSoccerTokenDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"grantRole"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWriteMetaSoccerTokenGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWriteMetaSoccerTokenIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWriteMetaSoccerTokenMint = /*#__PURE__*/ createUseWriteContract(
  {
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'mint',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWriteMetaSoccerTokenPause =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"renounceRole"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWriteMetaSoccerTokenRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"revokeRole"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWriteMetaSoccerTokenRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWriteMetaSoccerTokenTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWriteMetaSoccerTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWriteMetaSoccerTokenUnpause =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useSimulateMetaSoccerToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useSimulateMetaSoccerTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"burn"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useSimulateMetaSoccerTokenBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"burnFrom"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useSimulateMetaSoccerTokenBurnFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'burnFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useSimulateMetaSoccerTokenDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"grantRole"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useSimulateMetaSoccerTokenGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useSimulateMetaSoccerTokenIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useSimulateMetaSoccerTokenMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useSimulateMetaSoccerTokenPause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"renounceRole"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useSimulateMetaSoccerTokenRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"revokeRole"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useSimulateMetaSoccerTokenRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useSimulateMetaSoccerTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useSimulateMetaSoccerTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useSimulateMetaSoccerTokenUnpause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaSoccerTokenAbi}__
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWatchMetaSoccerTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWatchMetaSoccerTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `eventName` set to `"Paused"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWatchMetaSoccerTokenPausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWatchMetaSoccerTokenRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `eventName` set to `"RoleGranted"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWatchMetaSoccerTokenRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWatchMetaSoccerTokenRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWatchMetaSoccerTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaSoccerTokenAbi}__ and `eventName` set to `"Unpaused"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1)
 */
export const useWatchMetaSoccerTokenUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaSoccerTokenAbi,
    address: metaSoccerTokenAddress,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useReadErc721 = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadErc721GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc721Name = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadErc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenByIndex"`
 */
export const useReadErc721TokenByIndex = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'tokenByIndex',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadErc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc721TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWriteErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc721TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useSimulateErc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc721Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc721Abi, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWatchErc721Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Transfer',
  })
