import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
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

import './App.scss'
import { Table } from "./components/table/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    // action: async () => redirect("/overview/summary"),
    children: [
      {
        path: "/overview",
        element: <Overview />,
        children: [
          { path: "/overview/summary", element: <Table /> },
          {
            path: "/overview/table",
            element: (
              <>
                <h1>Table</h1>
              </>
            ),
          },
          {
            path: "/overview/charts",
            element: (
              <>
                <h1>Charts</h1>
              </>
            ),
          },
          {
            path: "/overview/reporting",
            element: (
              <>
                <h1>Reporting</h1>
              </>
            ),
          },
          {
            path: "/overview/analysis",
            element: (
              <>
                <h1>Analysis</h1>
              </>
            ),
          },
        ],
      },
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
