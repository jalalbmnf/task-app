import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loading from "components/Loading";
import Header from "components/Header";

const CardPage = lazy(() => import("pages/Card/index"));
const CardInternalPage = lazy(() => import("pages/Card/Internal/index"));
const TransactionPage = lazy(() => import("pages/Transaction/index"));
const TransactionInternalPage = lazy(
  () => import("pages/Transaction/Internal/index")
);

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/card" element={<CardPage />} />
          <Route path="/card/:cardId" element={<CardInternalPage />} />
          <Route path="/transaction" element={<TransactionPage />} />
          <Route
            path="/transaction/:transactionId"
            element={<TransactionInternalPage />}
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
