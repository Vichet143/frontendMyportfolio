import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import LoadingApp from "./components/LoadingApp";
import { MetaPixelProvider } from "@adkit/meta-pixel-react";
import UserService from "./service/UserService";

// Wake the API server (Render free tier sleeps when idle) as early as possible.
UserService.warmUp();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingApp>
        <MetaPixelProvider
          pixelIds="2071247553480678"
          enableLocalhost={true}
          debug={true}
          autoTrackPageView={true}
        >
          <App />
        </MetaPixelProvider>
      </LoadingApp>
    </BrowserRouter>
  </StrictMode>,
);
