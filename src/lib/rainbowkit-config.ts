
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { http, createConfig } from 'wagmi';
import { bsc } from 'wagmi/chains';

const projectId = 'YOUR_WALLET_CONNECT_PROJECT_ID'; // Replace with your WalletConnect Project ID

const { wallets } = getDefaultWallets({
  appName: 'Dracma App',
  projectId,
});

const config = createConfig({
  chains: [bsc],
  transports: {
    [bsc.id]: http(),
  },
  wallets: [...wallets],
});

export { config, wallets };
