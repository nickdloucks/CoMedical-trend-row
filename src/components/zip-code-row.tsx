import React, { Fragment } from "react";

interface Row{
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