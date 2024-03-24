import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
       
        const cleanValue = inputValue.trim();
        if (cleanValue.length <= 1) return;
        //setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( cleanValue );
        setInputValue( '' );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input id="busqueda" type="text" 
                placeholder="Buscar gif" 
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
