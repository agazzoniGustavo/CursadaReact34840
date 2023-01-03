import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="row img-fluid align-items-center justify-content-center">
        {
            items.map(item =>
                <div className="col-md-3 " key={item.id}>
                    <Item item={item} />
                    </div>
            )
        }
        </div>
    )
}

export default ItemList;