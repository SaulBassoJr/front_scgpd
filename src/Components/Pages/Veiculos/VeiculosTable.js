import React from "react";

function VeiculosTable({id, nome, modelo, marca, placa, renavan}){
    return(
        <div>
            <tr>
                <td>{nome}</td>
                <td>{modelo}</td>
                <td>{marca}</td>
                <td>{placa}</td>
                <td>{renavan}</td>
                </tr>
        </div>
    )
}

export default VeiculosTable