
import { useState, useEffect } from 'react';
import { useAccount, useReadContract } from 'wagmi';
import { formatUnits } from 'viem';

// ABI mínimo para leer el balance de tokens ERC20
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
  }
];

export const useDracmaBalance = () => {
  const { address, isConnected } = useAccount();
  const [isHolder, setIsHolder] = useState(false);
  const [balance, setBalance] = useState("0");
  const [isLoading, setIsLoading] = useState(true);
  
  // Contrato DRACMA en BSC
  const dracmaAddress = "0x8A9f07fdBc75144C9207373597136c6E280A872D";
  const requiredAmount = 10000; // Set to 10,000 tokens as requested

  // Consultar el balance solo si hay una dirección disponible
  const { data: balanceData, error, isPending } = useReadContract({
    address: dracmaAddress,
    abi: erc20ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    enabled: !!address, // Solo habilita la consulta cuando hay una dirección
  });

  // Consultar los decimales
  const { data: decimalsData } = useReadContract({
    address: dracmaAddress,
    abi: erc20ABI,
    functionName: 'decimals',
    enabled: !!address, // Solo habilita la consulta cuando hay una dirección
  });

  useEffect(() => {
    if (!isConnected) {
      setIsLoading(false);
      setBalance("0");
      setIsHolder(false);
      return;
    }

    if (!isPending && balanceData && decimalsData !== undefined) {
      try {
        const decimals = Number(decimalsData);
        const formattedBalance = formatUnits(balanceData as bigint, decimals);
        setBalance(formattedBalance);
        
        // Verificar si el usuario tiene suficientes tokens
        const hasEnoughTokens = Number(formattedBalance) >= requiredAmount;
        setIsHolder(hasEnoughTokens);
        setIsLoading(false);
      } catch (err) {
        console.error("Error processing balance data:", err);
        setIsLoading(false);
      }
    } else if (error) {
      console.error("Error fetching balance:", error);
      setIsLoading(false);
    }
  }, [balanceData, decimalsData, isPending, error, isConnected, address]);

  return { isHolder, balance, isLoading };
};
