import { useState, useEffect, useCallback } from 'react';
import { DataState } from '../interface';


export const useFetchDetail = (url) => {
    const [dataState, setDataState] = useState<DataState>({
        data: [],
        loading: true,
        error: null
    });

    const handleFetch = useCallback(
        async () => {
            try {
                const response = await fetch(url);
                if(!response.ok) throw new Error(response.statusText);

                const dataApi = await response.json();

                setDataState( prev => ({
                    ...prev,
                    loading: false,
                    data: dataApi
                }));

            } catch (error) {

                setDataState( prev => ({
                    ...prev,
                    loading: false,
                    error: (error as Error).message
                }));
            }
        },
        [],
    )

    useEffect(() => {
        if (dataState.error === null) handleFetch();
    }, []);


    return {
        ...dataState
    }
}
