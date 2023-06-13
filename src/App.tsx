import React, { useState, lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";

import Home from "./pages/Home/Home";
import Sidebar from "./components/Navlinks/Navlinks";
import NetwrokStatusWrapper from "./components/NetworkStatus/NetwrokStatus";
// import Contact from "./pages/Contact/Contact";
// import Account from "./pages/Account/Account";
// import NotFound from "./components/NotFound/NotFound";
// import UserProfile from "./pages/UserProfile/UserProfile";

const Contact = lazy(() => import("./pages/Contact/Contact"));
const Account = lazy(() => import("./pages/Account/Account"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));
const UserProfile = lazy(() => import("./pages/UserProfile/UserProfile"));

function ErrorFallback({ error }: any) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error?.message}</pre>
    </div>
  );
}

function NetworkFallback() {
  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <h1>No Internet Connection!!</h1>
    </div>
  );
}

function PageLoading() {
  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <h1>Loading...</h1>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      <NetwrokStatusWrapper FallbackComponent={<NetworkFallback />}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/account" element={<Account />} />
              <Route path="/account/:id" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </NetwrokStatusWrapper>
    </div>
  );
};

export default App;
