// import "../node_modules/react-modal-video/scss/modal-video.scss";
import { ToastContainer } from "react-toastify";
import { ChainId, DAppProvider } from "@usedapp/core";

import "react-toastify/dist/ReactToastify.css";
const config = {
  readOnlyChainId: ChainId.Polygon,
  readOnlyUrls: {
    [ChainId.Polygon]:
      "https://polygon-mainnet.infura.io/v3/70ced43c56d248f18566ebe01e2d9fbe",
  },
  supportedChains: [ChainId.Polygon],
};

export default function MyApp({ Component, pageProps }) {
  return (
    <DAppProvider config={config}>
      <ToastContainer />
      <Component {...pageProps} />
    </DAppProvider>
  );
}
