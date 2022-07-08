import React, { Fragment } from "react";

//This component will organize customers/sales data by zip code
// So that the direct sales do not need to be linked to a ship-to ID
// (With thousands of sales and hundreds of ship-tos, and with each manufacturer using different naming conventions,
// This was the best solution so far 


interface Row{ // a row represents all the data for one sale from the sales tracings
    customer: string,
    zip: number,
    product_group_id: string,
    item: string,
    quantity: number,
    ext_sales: number
}


function ZipCodeRow(row: Row): JSX.Element {

    return(<li>{row.zip}</li>);
    
}
