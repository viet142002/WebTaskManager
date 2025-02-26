import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";

const LoginPage = lazy(() => import("@/pages/Login"));
const RegisterPage = lazy(() => import("@/pages/Register"));
const WelcomePage = lazy(() => import("@/pages/Welcome"));

import LoadingLight from "@/components/Loading/LoadingLight";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingLight />}>
        <Routes>
          <Route index Component={WelcomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={RegisterPage} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
