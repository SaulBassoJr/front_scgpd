import styles from './Servicos.module.css'
import Input from '../../Forms/Input'
import {FaRegSave, FaRegTimesCircle} from 'react-icons/fa'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function ServicosCadastro( servicoData){
    const [servico, setServico] = useState(servicoData || {});

    function createPost(servico){
        fetch('http://127.0.0.1:8000/api/serviceProvided', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(servico),
        }).then((resp) => resp.json())
        .then((data) =>{
            console.log(data.data)
        })
        .catch(err => console.log(err))
    }

       
    function handleChange(e) {
        setServico({ ...servico, [e.target.name]: e.target.value })
        console.log(servico)
    }

    const submit = (e) => {
        e.preventDefault()
        createPost(servico)
    }

    return(
        <form    className={styles.form}>
            <div className={styles.par}>
                <Input
                    type="varchar" 
                    text="*Nome do Serviço" 
                    name="nome" 
                    placeholder="Insira o nome" 
                    maxlength="50"
                    handleOnChange={handleChange}
                    value={servico.nome}
                />
                <Input
                    type="double" 
                    text="*Valor Detran" 
                    name="valorDetran" 
                    placeholder="Insira o valor do Detran"
                    maxlength="15"
                    handleOnChange={handleChange}
                    value={servico.valorDetran}
                />
                <Input
                    type="double" 
                    text="*Valor Despachante" 
                    name="valorDespachante" 
                    placeholder="Insira o valor da Despachante" 
                    maxlength="15"
                    handleOnChange={handleChange}
                    value={servico.valorDespachante}
                />
            </div>
            <div className={styles.par}>
                <Button variant="primary" onClick={submit}> <FaRegSave /> Salvar</Button>
                <h4> | </h4>
                <Button variant="danger" href={'/servicos'}> <FaRegTimesCircle /> Cancelar</Button>
            </div>
        </form>
    )
}

export default ServicosCadastro