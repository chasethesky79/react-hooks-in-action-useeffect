import { useEffect, useState } from 'react';

export default function UseEffectExample() {
    const [size, setSize] = useState(getSize())

    function getSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    const handleWindowResize = () => setSize(getSize());
    useEffect(() => window.addEventListener('resize', handleWindowResize));
    return (
        <p>Width: {size.width}, Height: {size.height}</p>
    )
}