import { Suspense, lazy, useEffect } from "react";

import LoadingPencil from "@/components/Loading/LoadingPencil";
import { useTrans } from "@/store";

const Pages = lazy(() => import("./Pages"));
const GlobalComponent = lazy(() => import("@/components/GlobalComponent"));

function App() {
    const initTrans = useTrans((state) => state.init);

    useEffect(() => {
        initTrans();
    }, [initTrans]);
    return (
        <Suspense fallback={<LoadingPencil isFixed />}>
            <Pages />
            <GlobalComponent />
        </Suspense>
    );
}

export default App;
