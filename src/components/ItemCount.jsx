import React, { useState } from "react";
import { useEffect } from "react";

const ItemCount = ({stockItems}) => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems);
    
    useEffect(()=>{
    setStock(stockItems)

    },[stockItems])
    //INCREMENTA EL CONTADOR
    const incrementarContador = () => {
        //NO PERMITE INGRESAR MAS DEL STOCK LIMITE
        if(counter < stock){
            setCounter(counter + 1);
        }     
    }


    //DECREMENTA EL CONTADOR
    const decrementarContador = () => {
        //IMPIDE STOCK NEGATIVO EN EL CARRITO
        if(counter > 1){
        setCounter(counter - 1);
        }
    }

    //AGREGA PRODUCTOS AL CARRO SIN PASAR EL STOCK REAL
    const onAdd = () => {
        if((stock > 0) && (counter <= stock)){
        console.log("Agregaste " + counter + " productos al carro")
        setStock(stock - counter);
        //RESTA AL CONTADOR
        setCounter(0);
        }
    }


    return(
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-dark" onClick={decrementarContador}>-</button>
                        <button type="button" className="btn btn-dark espacio">{counter}</button>
                        <button type="button" className="btn btn-dark" onClick={incrementarContador}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button className="btn btn-dark" onClick={onAdd}>Agregar al carro</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;