import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./pages/SharedLayout/SharedLayout";
import { Spinner } from "./components/Spinner/Spinner";
import { GlobalStyles } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./styles/theme";

const Home = React.lazy(() => import("pages/Home/Home"));

function App() {
  return (
      <ThemeProvider theme={baseTheme}>
        <GlobalStyles />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
  );
}

export { App };
