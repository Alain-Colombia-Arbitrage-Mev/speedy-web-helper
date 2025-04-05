
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { metaMaskWallet, walletConnectWallet, coinbaseWallet } from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, zora } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [publicProvider()]
);

const projectId = 'YOUR_WALLET_CONNECT_PROJECT_ID'; // Replace with your WalletConnect Project ID

const { wallets } = getDefaultWallets({
  appName: 'Dracma App',
  projectId,
  chains,
});

const appInfo = {
  appName: 'Dracma',
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      metaMaskWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
      coinbaseWallet({ appName: appInfo.appName, chains })
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
});

export { wagmiConfig, chains };
