import React from "react";
import { useLocation, useParams } from 'react-router-dom'
import { getItemById } from '../../Helpers/Items'


const Item = () => {
    const { itemId } = useParams()
    const product = getItemById(itemId)
    
    return (
        <>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
           
            <div>
                <h2>Item: <p>{product.title}</p></h2>
                <img src={product.url} alt={product.title} />
                <h3>Price: {product.precio}</h3>
            </div>

        </div>
        </>
    )
}

export default Item