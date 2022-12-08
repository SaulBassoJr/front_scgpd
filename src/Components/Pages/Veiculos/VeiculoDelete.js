import React from "react";
import Button from 'react-bootstrap/Button';
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

function VeiculoDelete({id, handleRemove}){
  const remove =(e) =>{
    e.preventDefault()
    handleRemove(id)
  }

  return(
        <div>
          <Button variant="danger"  onClick={remove}> <FaRegTrashAlt/> </Button>
          <Button variant="primary" href={`/veiculos/${id}`} ><FaRegEdit/></Button>
      </div>
    )
}

export default VeiculoDelete