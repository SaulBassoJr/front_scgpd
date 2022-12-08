import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaRegTimesCircle, FaRegSave } from "react-icons/fa";
import { Link } from "react-router-dom";
import Input from "../../Forms/Input";
import Select from "../../Forms/Select";
import SubmitButton from "../../Forms/SubmitButton";
import styles from "./Veiculos.module.css";

import Button from 'react-bootstrap/Button';



function VeiculoEdit() {

  const {id} = useParams()
  console.log(id) 
  const [veiculo, setVeiculo] = useState([])

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/vehicle/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((resp) => resp.json())
    .then((data) => {
        setVeiculo(data.data)
    })
    .catch(err => console.log)
  }, [id])


  return(
    <form className={styles.form}>
        <div className={styles.par}>
            <Input 
                type="text" 
                text="*Proprietário" 
                name="nome" 
                placeholder="Insira o nome do proprietário" 
                maxlength="100"
              //  handleOnChange={handleChange}
            />
            <Input
                type="text" 
                text="*Placa" 
                name="placa" 
                mask="aaa-9999" 
                placeholder="Insira o placa"
              //  handleOnChange={handleChange}
            />
            <Input
                type="integer" 
                text="*N° Renavan" 
                name="renavan" 
                mask="99999999999" 
                placeholder="Insira o renavan" 
             //   handleOnChange={handleChange}
            />
        </div>
        <div className={styles.par}>
            <Input
                type="text" 
                text="*Marca" 
                name="marca" 
                placeholder="Insira a marca"
              //  handleOnChange={handleChange}
            />
            <Input
                type="string" 
                text="*Modelo" 
                name="modelo" 
                placeholder="Insira o modelo"
               // handleOnChange={handleChange}
            />
        </div>
        <div className={styles.form_control}>
            <label htmlFor="debitos_id">*Débitos</label>
            <select
                name="debitos_id"  
            >
                <option>Selecione...</option>
                <option>Sim</option>
                <option>Não</option>
            </select>
        </div>
        <div className={styles.Boton}>
            <Button variant="primary" href={'/veiculos'} > <FaRegSave /> Salvar</Button>
            <h4> | </h4>
            <Button variant="danger" href={'/veiculos'}> <FaRegTimesCircle /> Cancelar</Button>
        </div>
    </form>
)

  
   
}

export default VeiculoEdit;