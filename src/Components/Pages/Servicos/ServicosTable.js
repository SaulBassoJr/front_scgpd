import React from "react";

function ServicosTable({id, nome, valorDespa, valorDetran}){
    return(
        <div>
            
                <td>{nome}</td>
                <td>{valorDespa}</td>
                <td>{valorDetran}</td>
            
        </div>
    )
}

export default ServicosTable