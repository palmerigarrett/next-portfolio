import { useState, useEffect } from 'react';

interface IViewport {
    width: number;
}

export default function useViewport(): IViewport {
    const [width, setWidth] = useState<number>(
        window.innerWidth,
    );

    useEffect(() => {
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
    }, []);
    return { width };
}
