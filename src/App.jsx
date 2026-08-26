import AppRoutes from "./routes/routes";
import { useMetaPixel } from '@adkit/meta-pixel-react';

function App() {
  useMetaPixel({
    pixelIds: "2071247553480678",
    enableLocalhost: true,
    debug: true,
  });
  return <AppRoutes />;
}

export default App;
