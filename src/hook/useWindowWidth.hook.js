import { useEffect, useState } from 'react'

export default function useWindowWidth() {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        //creamos una funcion que actualiza el estado del ancho del cliente
        const updateWidth = () => {
            const width = document.body.clientWidth
            setWidth(width)
        }
        //actualizamos el estado uan vez montado el estado
        updateWidth()
        window.addEventListener('resize', updateWidth)

        return () => window.removeEventListener('resize', updateWidth)
    }, [width])
    return width
}
