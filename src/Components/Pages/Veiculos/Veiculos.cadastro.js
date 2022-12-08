import styles from './Veiculos.module.css'
import Input from '../../Forms/Input'
import Select from '../../Forms/Select'
import {FaRegSave, FaRegTimesCircle} from 'react-icons/fa'
import {useState} from 'react'

import Button from 'react-bootstrap/Button';

function VeiculosCadastro({handleSubmit, veiculoData}){
    const [veiculo, setVeiculo] = useState(veiculoData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(veiculo)
    }
    
    function handleChange(e) {
        setVeiculo({ ...veiculo, [e.target.name]: e.target.value })
        console.log(veiculo)
    }
    
    return(
        <form className={styles.form}>
            <div className={styles.par}>
                <Input 
                    type="text" 
                    text="*Proprietário" 
                    name="nome" 
                    placeholder="Insira o nome do proprietário" 
                    maxlength="100"
                    handleOnChange={handleChange}
                />
                <Input
                    type="text" 
                    text="*Placa" 
                    name="placa" 
                    mask="aaa-9999" 
                    placeholder="Insira o placa"
                    handleOnChange={handleChange}
                />
                <Input
                    type="integer" 
                    text="*N° Renavan" 
                    name="renavan" 
                    mask="99999999999" 
                    placeholder="Insira o renavan" 
                    handleOnChange={handleChange}
                />
            </div>
            <div className={styles.par}>
                <Input
                    type="text" 
                    text="*Marca" 
                    name="marca" 
                    placeholder="Insira a marca"
                    handleOnChange={handleChange}
                />
                <Input
                    type="string" 
                    text="*Modelo" 
                    name="modelo" 
                    placeholder="Insira o modelo"
                    handleOnChange={handleChange}
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
                <Button variant="primary" href={'/veiculos'} onClick={submit}> <FaRegSave /> Salvar</Button>
                <h4> | </h4>
                <Button variant="danger" href={'/veiculos'}> <FaRegTimesCircle /> Cancelar</Button>
            </div>
        </form>
    )
}

export default VeiculosCadastro