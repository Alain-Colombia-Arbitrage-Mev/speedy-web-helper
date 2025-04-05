
import { ReactNode } from 'react';
import { WagmiConfig } from 'wagmi';
import { RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit';
import { wagmiConfig, chains } from '@/lib/rainbowkit-config';
import { useTheme } from '@/contexts/ThemeContext';

interface WalletProviderProps {
  children: ReactNode;
}

export function WalletProvider({ children }: WalletProviderProps) {
  const { isDarkMode } = useTheme();

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider 
        chains={chains} 
        theme={isDarkMode ? darkTheme() : lightTheme()}
        modalSize="compact"
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
