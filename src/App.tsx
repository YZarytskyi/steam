import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./pages/SharedLayout/SharedLayout";
import { Spinner } from "./components/Spinner/Spinner";
import { GlobalStyles } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./styles/theme";

const Home = React.lazy(() => import("pages/Home/Home"));
const Favorites = React.lazy(() => import("pages/Favorites/Favorites"));
const GameDetails = React.lazy(() => import("pages/GameDetails/GameDetails"));

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/:id" element={ <GameDetails /> } />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export { App };
