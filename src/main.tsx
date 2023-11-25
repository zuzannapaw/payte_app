import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/root.tsx";
import {
  Bundles,
  BuySell,
  Community,
  NotFound,
  Overview,
  Reporting,
  Wallets,
} from "./pages/index.tsx";
import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "/overview", element: <Overview /> },
      { path: "/bundles", element: <Bundles /> },
      { path: "/wallets", element: <Wallets /> },
      { path: "/buysell", element: <BuySell /> },
      { path: "/reporting", element: <Reporting /> },
      { path: "/community", element: <Community /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
