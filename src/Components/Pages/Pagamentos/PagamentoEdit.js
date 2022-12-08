import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaRegTimesCircle, FaRegSave } from "react-icons/fa";
import { Link } from "react-router-dom";
import Input from "../../Forms/Input";
import Select from "../../Forms/Select";
import SubmitButton from "../../Forms/SubmitButton";
import styles from "./Pagamentos.module.css";

import Button from 'react-bootstrap/Button';



function PagamentoEdit() {

  const {id} = useParams()
  console.log(id) 
  const [pagamento, setPagemento] = useState([])

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/pagamento/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((resp) => resp.json())
    .then((data) => {
        setPagemento(data.data)
    })
    .catch(err => console.log)
  }, [id])


  return(
    <form className={styles.form}>
        <div className={styles.par}>
            <Input
                type="text" 
                text="*Serviço" 
                name="servico" 
                placeholder="Insira o tipo de serviço"
            />
            <Input
                type="float" 
                text="*Valor" 
                name="valor" 
                placeholder="Insira o valor"
            />
            <Input
                type="date" 
                text="*Data" 
                name="date"
            />
        </div>
        <div >
            <Select name="category_id" text="*Forma de pagamento"/>    
            <Select name="category_id" text="*Status do Pagamento"/>
        </div>
        <div className={styles.Boton}>
            <Button variant="primary" href={'/pagamentos'} > <FaRegSave /> Salvar</Button>
            <h4> | </h4>
            <Button variant="danger" href={'/pagamentos '}> <FaRegTimesCircle /> Cancelar</Button>
        </div>
    </form>
)

  
   
}

export default PagamentoEdit;