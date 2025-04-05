
import { ReactNode } from 'react';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit';
import { config } from '@/lib/rainbowkit-config';
import { useTheme } from '@/contexts/ThemeContext';
import { bsc } from 'wagmi/chains';

interface WalletProviderProps {
  children: ReactNode;
}

export function WalletProvider({ children }: WalletProviderProps) {
  const { isDarkMode } = useTheme();

  return (
    <WagmiProvider config={config}>
      <RainbowKitProvider 
        theme={isDarkMode ? darkTheme() : lightTheme()}
        modalSize="compact"
      >
        {children}
      </RainbowKitProvider>
    </WagmiProvider>
  );
}
