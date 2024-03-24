
import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
    
    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    }
    //Esto es para disparar efectos secundarios cuando un estado cambia
    //no puede ser asincrono
    useEffect(() => {
        getImages();
    }, []); //Es importante poner el 2do argumento un arreglo vacio si no hay variables sino esto llama infinitamente el fetch

    return {
        images,
        isLoading
    };
}
