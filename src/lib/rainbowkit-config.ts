
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { http, createConfig } from 'wagmi';
import { bsc } from 'wagmi/chains';

const projectId = '147f1ced0fc70fd33bc82189d73ebb43'; // WalletConnect Project ID

const { wallets } = getDefaultWallets({
  appName: 'Dracma App',
  projectId,
});

const config = createConfig({
  chains: [bsc],
  transports: {
    [bsc.id]: http(),
  },
});

export { config, wallets };
