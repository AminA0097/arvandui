import { useCallback, useRef } from 'react';

export function useRequestLock() {
    const activeRequestId = useRef(0);

    const startRequest = useCallback(() => {
        activeRequestId.current += 1;
        return activeRequestId.current;
    }, []);

    const isLatest = useCallback((id: number) => id === activeRequestId.current, []);

    return { startRequest, isLatest };
}