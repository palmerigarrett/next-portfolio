import { useState, useEffect } from 'react';

interface IViewport {
    width: number;
}

export default function useViewport(): IViewport {
    const [width, setWidth] = useState<number>(
        typeof window !== 'undefined' ? window.innerWidth : 0,
    );

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleWindowResize = () =>
                setWidth(window.innerWidth);
            window.addEventListener(
                'resize',
                handleWindowResize,
            );
            return () =>
                window.removeEventListener(
                    'resize',
                    handleWindowResize,
                );
        }
    }, []);
    return { width };
}
