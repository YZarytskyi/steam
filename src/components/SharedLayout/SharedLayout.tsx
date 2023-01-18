import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "components/Header/Header";
import { Spinner } from "components/Spinner/Spinner";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export { SharedLayout };
