"use client"
import { useState, useEffect } from "react";

type MockState<TData> = {
    data: TData | undefined;
    loading: boolean;
    error: boolean;
};

export function useMockState<TData>(resolvedData: TData, fails: boolean = false) {
    const [state, setState] = useState<MockState<TData>>(() => {
        return { data: undefined, loading: true, error: false };
    });

    useEffect(() => {
        setState({
            data: undefined,
            loading: true,
            error: false,
        });

        const timeout = setTimeout(() => {
            setState({
                data: resolvedData,
                loading: false,
                error: fails,
            });
        }, 200);

        return () => {
            clearTimeout(timeout);
        };
    }, [resolvedData, fails]);

    return state;
}

