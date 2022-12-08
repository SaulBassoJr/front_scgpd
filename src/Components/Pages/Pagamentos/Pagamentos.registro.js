import styles from './Pagamentos.module.css'
import Input from '../../Forms/Input'
import Select from '../../Forms/Select'
import SubmitButton from '../../Forms/SubmitButton'
import {FaRegSave, FaRegTimesCircle} from 'react-icons/fa'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function PagamentosRegistro({handleSubmit, pagamentoData}){
    const [pagamento, setPagamento] = useState(pagamentoData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(pagamento)
    }
    
    function handleChange(e) {
        setPagamento({ ...pagamento, [e.target.name]: e.target.value })
        console.log(pagamento)
    }
    
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
                <Button variant="primary" href={'/pagamentos'} onClick={submit}> <FaRegSave /> Salvar</Button>
                <h4> | </h4>
                <Button variant="danger" href={'/pagamentos '}> <FaRegTimesCircle /> Cancelar</Button>
            </div>
        </form>
    )
}

export default PagamentosRegistro
