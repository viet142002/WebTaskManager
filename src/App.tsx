import { Suspense, lazy, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import LoadingPencil from "@/components/Loading/LoadingPencil";
import { useTrans } from "@/store";

const Pages = lazy(() => import("./Pages"));
const GlobalComponent = lazy(() => import("@/components/GlobalComponent"));

const queryClient = new QueryClient();

function App() {
    const initTrans = useTrans((state) => state.init);

    useEffect(() => {
        initTrans();
    }, [initTrans]);
    return (
        <Suspense fallback={<LoadingPencil isFixed />}>
            <QueryClientProvider client={queryClient}>
                <Pages />
                <GlobalComponent />
            </QueryClientProvider>
        </Suspense>
    );
}

export default App;
