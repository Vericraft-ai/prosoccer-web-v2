import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ProsoccerNFT
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const prosoccerNftAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'initialOwner', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  { type: 'error', inputs: [], name: 'EnforcedPause' },
  { type: 'error', inputs: [], name: 'ExpectedPause' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
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
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
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
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BatchMetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
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
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
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
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'contractURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'lock',
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
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
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
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'uri', internalType: 'string', type: 'string' },
    ],
    name: 'safeMint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'baseURI', internalType: 'string', type: 'string' }],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_contractBaseURI', internalType: 'string', type: 'string' },
    ],
    name: 'setContractBaseURI',
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
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'unlock',
    outputs: [],
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
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const prosoccerNftAddress = {
  43113: '0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208',
} as const

/**
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const prosoccerNftConfig = {
  address: prosoccerNftAddress,
  abi: prosoccerNftAbi,
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prosoccerNftAbi}__
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useReadProsoccerNft = /*#__PURE__*/ createUseReadContract({
  abi: prosoccerNftAbi,
  address: prosoccerNftAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useReadProsoccerNftBalanceOf = /*#__PURE__*/ createUseReadContract(
  {
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'balanceOf',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"contractURI"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useReadProsoccerNftContractUri =
  /*#__PURE__*/ createUseReadContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'contractURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"getApproved"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useReadProsoccerNftGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"isApprovedForAll"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useReadProsoccerNftIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useReadProsoccerNftName = /*#__PURE__*/ createUseReadContract({
  abi: prosoccerNftAbi,
  address: prosoccerNftAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useReadProsoccerNftOwner = /*#__PURE__*/ createUseReadContract({
  abi: prosoccerNftAbi,
  address: prosoccerNftAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"ownerOf"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useReadProsoccerNftOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: prosoccerNftAbi,
  address: prosoccerNftAddress,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"paused"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useReadProsoccerNftPaused = /*#__PURE__*/ createUseReadContract({
  abi: prosoccerNftAbi,
  address: prosoccerNftAddress,
  functionName: 'paused',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useReadProsoccerNftSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useReadProsoccerNftSymbol = /*#__PURE__*/ createUseReadContract({
  abi: prosoccerNftAbi,
  address: prosoccerNftAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"tokenURI"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useReadProsoccerNftTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: prosoccerNftAbi,
  address: prosoccerNftAddress,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prosoccerNftAbi}__
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWriteProsoccerNft = /*#__PURE__*/ createUseWriteContract({
  abi: prosoccerNftAbi,
  address: prosoccerNftAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWriteProsoccerNftApprove = /*#__PURE__*/ createUseWriteContract(
  {
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'approve',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"burn"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWriteProsoccerNftBurn = /*#__PURE__*/ createUseWriteContract({
  abi: prosoccerNftAbi,
  address: prosoccerNftAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"lock"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWriteProsoccerNftLock = /*#__PURE__*/ createUseWriteContract({
  abi: prosoccerNftAbi,
  address: prosoccerNftAddress,
  functionName: 'lock',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWriteProsoccerNftPause = /*#__PURE__*/ createUseWriteContract({
  abi: prosoccerNftAbi,
  address: prosoccerNftAddress,
  functionName: 'pause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWriteProsoccerNftRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"safeMint"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWriteProsoccerNftSafeMint =
  /*#__PURE__*/ createUseWriteContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'safeMint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWriteProsoccerNftSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWriteProsoccerNftSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"setBaseURI"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWriteProsoccerNftSetBaseUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"setContractBaseURI"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWriteProsoccerNftSetContractBaseUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'setContractBaseURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWriteProsoccerNftTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWriteProsoccerNftTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"unlock"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWriteProsoccerNftUnlock = /*#__PURE__*/ createUseWriteContract({
  abi: prosoccerNftAbi,
  address: prosoccerNftAddress,
  functionName: 'unlock',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWriteProsoccerNftUnpause = /*#__PURE__*/ createUseWriteContract(
  {
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'unpause',
  },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prosoccerNftAbi}__
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useSimulateProsoccerNft = /*#__PURE__*/ createUseSimulateContract({
  abi: prosoccerNftAbi,
  address: prosoccerNftAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useSimulateProsoccerNftApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"burn"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useSimulateProsoccerNftBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"lock"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useSimulateProsoccerNftLock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'lock',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useSimulateProsoccerNftPause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useSimulateProsoccerNftRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"safeMint"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useSimulateProsoccerNftSafeMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'safeMint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useSimulateProsoccerNftSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useSimulateProsoccerNftSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"setBaseURI"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useSimulateProsoccerNftSetBaseUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"setContractBaseURI"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useSimulateProsoccerNftSetContractBaseUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'setContractBaseURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useSimulateProsoccerNftTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useSimulateProsoccerNftTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"unlock"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useSimulateProsoccerNftUnlock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'unlock',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prosoccerNftAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useSimulateProsoccerNftUnpause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prosoccerNftAbi}__
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWatchProsoccerNftEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prosoccerNftAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWatchProsoccerNftApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prosoccerNftAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWatchProsoccerNftApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prosoccerNftAbi}__ and `eventName` set to `"BatchMetadataUpdate"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWatchProsoccerNftBatchMetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    eventName: 'BatchMetadataUpdate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prosoccerNftAbi}__ and `eventName` set to `"MetadataUpdate"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWatchProsoccerNftMetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    eventName: 'MetadataUpdate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prosoccerNftAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWatchProsoccerNftOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prosoccerNftAbi}__ and `eventName` set to `"Paused"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWatchProsoccerNftPausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prosoccerNftAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWatchProsoccerNftTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prosoccerNftAbi}__ and `eventName` set to `"Unpaused"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x7AEa55313E57A0A606f713BE3D52fFd0Ac61D208)
 */
export const useWatchProsoccerNftUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prosoccerNftAbi,
    address: prosoccerNftAddress,
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
