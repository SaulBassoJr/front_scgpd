import React from "react";
import Table from 'react-bootstrap/Table';

function ClienteLinha({id, nome, cpf, rg, genero, cep,logradouro, bairro, numero, uf, cidade, tipotel, telefone}){
    return(
        <div>
          <tr>
          <td>{nome}</td>
          <td>{genero}</td>
          <td>{cpf}</td>
          <td>{rg}</td>
          <td>{logradouro}</td>
          <td>{numero}</td>
          <td>{bairro}</td>
          <td>{cidade}</td>
          <td>{uf}</td>
          </tr>
      </div>
    )
}
 export default ClienteLinha