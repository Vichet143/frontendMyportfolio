import AppRoutes from "./routes/routes";
import { useMetaPixel } from '@adkit/meta-pixel-react';

function App() {
  useMetaPixel({
    pixelIds: "1039264842049484",
    enableLocalhost: true,
    debug: true,
  });
  return <AppRoutes />;
}

export default App;
