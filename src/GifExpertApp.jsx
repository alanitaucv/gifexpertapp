import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['The Simpsons']);

    const onAddCategory = ( newCategory ) => {
        if (categories.includes(newCategory)) return;

        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            {/* <AddCategory setCategories= { setCategories }/> * Esto manda una referencia de la función */}
            <AddCategory onNewCategory={ onAddCategory }/> 
            { 
                categories.map( ( category ) => (
                    <GifGrid key={ category } category={ category }/>
                ))
            }
        </>

    );
}
