import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaRegTimesCircle, FaRegSave } from "react-icons/fa";
import { Link } from "react-router-dom";
import Input from "../../Forms/Input";
import Select from "../../Forms/Select";
import SubmitButton from "../../Forms/SubmitButton";
import styles from "./Servicos.module.css";

import Button from 'react-bootstrap/Button';



function ServicoEdit() {

  const {id} = useParams()
  console.log(id) 
  const [servico, setServico] = useState([])

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/serviceProvided/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((resp) => resp.json())
    .then((data) => {
        setServico(data.data)
    })
    .catch(err => console.log)
  }, [id])


  return(
    <form    className={styles.form}>
        <div className={styles.par}>
            <Input
                type="varchar" 
                text="*Nome do Serviço" 
                name="nome" 
                placeholder="Insira o nome" 
                maxlength="50"
                //handleOnChange={handleChange}
               // value={servico.nome}
            />
            <Input
                type="double" 
                text="*Valor Detran" 
                name="valorDetran" 
                placeholder="Insira o valor do Detran"
                maxlength="15"
               // handleOnChange={handleChange}
               // value={servico.valorDetran}
            />
            <Input
                type="double" 
                text="*Valor Despachante" 
                name="valorDespachante" 
                placeholder="Insira o valor da Despachante" 
                maxlength="15"
                //handleOnChange={handleChange}
               // value={servico.valorDespachante}
            />
        </div>
        <div className={styles.par}>
            <Button variant="primary" > <FaRegSave /> Salvar</Button>
            <h4> | </h4>
            <Button variant="danger" href={'/servicos'}> <FaRegTimesCircle /> Cancelar</Button>
        </div>
    </form>
)

  
   
}

export default ServicoEdit;