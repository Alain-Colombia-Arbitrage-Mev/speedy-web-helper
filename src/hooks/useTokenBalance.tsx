import { useState, useEffect } from 'react';
import { useAccount, useReadContract } from 'wagmi';
import { formatUnits } from 'viem';
import { useToast } from '@/hooks/use-toast';

// ABI completo para interactuar con tokens ERC20
const erc20ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

export const useDracmaBalance = () => {
  const { address, isConnected } = useAccount();
  const { toast } = useToast();
  const [isHolder, setIsHolder] = useState(false);
  const [balance, setBalance] = useState("0");
  const [isLoading, setIsLoading] = useState(true);
  const [showPurchaseMessage, setShowPurchaseMessage] = useState(false);
  
  // Contrato DRACMA en BSC
  const dracmaAddress = "0x8A9f07fdBc75144C9207373597136c6E280A872D";
  const requiredAmount = 10000;

  const { data: balanceData, error: balanceError, isPending: balancePending } = useReadContract({
    address: dracmaAddress,
    abi: erc20ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
  });

  const { data: decimalsData, error: decimalsError, isPending: decimalsPending } = useReadContract({
    address: dracmaAddress,
    abi: erc20ABI,
    functionName: 'decimals',
  });

  useEffect(() => {
    console.log("Wallet connection status:", isConnected);
    console.log("Current address:", address);
    console.log("Balance data:", balanceData);
    console.log("Decimals data:", decimalsData);
    
    if (!isConnected || !address) {
      setIsLoading(false);
      setBalance("0");
      setIsHolder(false);
      setShowPurchaseMessage(false);
      return;
    }

    const isDataReady = !balancePending && !decimalsPending && balanceData !== undefined && decimalsData !== undefined;
    
    if (isDataReady) {
      try {
        const decimals = Number(decimalsData);
        const formattedBalance = formatUnits(balanceData as bigint, decimals);
        console.log("Formatted balance:", formattedBalance);
        
        setBalance(formattedBalance);
        
        // Verificar si el usuario tiene suficientes tokens
        const hasEnoughTokens = Number(formattedBalance) >= requiredAmount;
        setIsHolder(hasEnoughTokens);
        setShowPurchaseMessage(!hasEnoughTokens); // Mostrar mensaje si no tiene suficientes tokens
        setIsLoading(false);
      } catch (err) {
        console.error("Error processing balance data:", err);
        setIsLoading(false);
        setShowPurchaseMessage(true);
      }
    } else if (balanceError || decimalsError) {
      console.error("Error fetching balance:", balanceError || decimalsError);
      setIsLoading(false);
      setBalance("0");
      setIsHolder(false);
      setShowPurchaseMessage(true);
    }
  }, [balanceData, decimalsData, balancePending, decimalsPending, isConnected, address, balanceError, decimalsError]);

  return { isHolder, balance, isLoading, showPurchaseMessage };
};
