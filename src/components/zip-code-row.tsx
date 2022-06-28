import React, { Fragment } from "react";

interface Row{
    customer: string,
    zip: number,

}


function ZipCodeRow(row: Row): JSX.Element {

    return(<li>{row.zip}</li>);
    
}