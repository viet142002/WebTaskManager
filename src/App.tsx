import { Suspense, lazy } from "react";

import LoadingPencil from "@/components/Loading/LoadingPencil";

const Pages = lazy(() => import("./Pages"));
const GlobalComponent = lazy(() => import("@/components/GlobalComponent"));

function App() {
    return (
        <>
            <Suspense fallback={<LoadingPencil isFixed />}>
                <Pages />
                <GlobalComponent />
            </Suspense>
        </>
    );
}

export default App;
