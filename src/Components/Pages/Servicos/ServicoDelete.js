import React from "react";
import Button from 'react-bootstrap/Button';
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

function ServicoDelete({id, handleRemove}){
  const remove =(e) =>{
    e.preventDefault()
    handleRemove(id)
  }

  return(
        <div>
          <Button variant="danger"  onClick={remove}> <FaRegTrashAlt/> </Button>
          <Button variant="primary" href={`/servicos/${id}`} ><FaRegEdit/></Button>
      </div>
    )
}

export default ServicoDelete