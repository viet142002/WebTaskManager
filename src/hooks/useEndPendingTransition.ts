import { DependencyList, useEffect, useRef } from "react"

export const useEndPendingTransition = (fn: () => void, dependencies: DependencyList) => {
    const firstTrigger = useRef(true);

    useEffect(() => {
        if (!firstTrigger.current) {
            fn();
        }
        firstTrigger.current = false;
    }, dependencies);
}