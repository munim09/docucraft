import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
    const timeoutIdRef = useRef(null);

    useEffect(() => {
        return () => {
            // console.log("return: clearing......");
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current);
            }
        };
    }, []);

    const debouncedCallback = (...args) => {
        if (timeoutIdRef.current) {
            // console.log("clearing......");
            clearTimeout(timeoutIdRef.current);
        }
        // console.log("before: waiting......");
        timeoutIdRef.current = setTimeout(() => {
            // console.log("calling......");
            callback(...args);
        }, delay);
    };
    return debouncedCallback;
};

export default useDebounce;
