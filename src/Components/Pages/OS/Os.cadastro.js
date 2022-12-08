import styles from './Os.module.css'
import Input from '../../Forms/Input'
import Select from '../../Forms/Select'
import {FaRegSave, FaRegTimesCircle} from 'react-icons/fa'
import Button from 'react-bootstrap/Button';
import {useState} from 'react'

function OsCadastro({handleSubmit, osData}){
    const [os, setOs] = useState(osData || {});

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(os)
    }
    
    function handleChange(e) {
        setOs({ ...os, [e.target.name]: e.target.value })
        console.log(os)
    }

    return(
        <form className={styles.form}>

            <div className={styles.par}>
                <Input
                    type="string" 
                    text="*Placa" 
                    name="placa" 
                    mask="aaa-9*99" 
                    placeholder="Insira a placa"
                />
                <Input
                    type="text" 
                    text="*Moodelo" 
                    name="name" 
                    placeholder="Insira o modelo do veiculo"
                />
            </div>

            <div className={styles.par}>
                <Select name="category_id" text="*Debitos?"/>
                <Select name="category_id" text="*Financiamento?"/>
            </div>

            <div className={styles.par}>
                <Input
                    type="text" 
                    text="*Nome do Cliente" 
                    name="name" 
                    placeholder="Insira o nome" 
                    maxlength="100"
                />
                <Input
                    type="integer" 
                    text="*CPF" 
                    name="cpf" 
                    mask="999.999.999-99" 
                    placeholder="Insira o CPF"
                />
            </div>

            <div className={styles.par}>
                <Input
                    type="text" 
                    text="*N° Telefone Celular" 
                    name="numero" 
                    placeholder="Insira o numero"
                />
                <Input
                    type="text" 
                    text="*Serviço(s)" 
                    name="name" 
                    placeholder="Insira o(s) serviço(s)"
                />
            </div>

            <div className={styles.par}>
                <Input
                    type="float" 
                    text="*Valor Serviço(s)" 
                    name="value" 
                    placeholder="Insira o valor"
                />
                <Input
                    type="number" 
                    text="*Prazo" 
                    name="number" 
                    placeholder="Insira o prazo"
                />
            </div>
            <div className={styles.par}>
                <Select name="category_id" text="*Conversão Merco Sul?"/>
                <Input
                    type="text" 
                    text="*Observações" 
                    name="text" 
                    placeholder="Insira as observações"
                />
            </div>

            <div className={styles.um}>
                <Input
                    type="date" 
                    text="*Data" 
                    name="date"
                />
            </div>

            <p className={styles.titulo}> Em caso de comunicação de venda preencha </p>

            <div className={styles.par}>
                <Input
                    type="float" 
                    text="*Valor Veiculo" 
                    name="name" 
                    placeholder="Insira o valor"
                />
                <Input
                    type="date" 
                    text="*Data de Venda" 
                    name="date"
                />
                <Input
                    type="date" 
                    text="*Data de Vencimento" 
                    name="date"
                />
                
            </div>

            <div className={styles.Boton}>
                <Button variant="primary" href={'/os'} onClick={submit}> <FaRegSave /> Salvar</Button>
                <h4> | </h4>
                <Button variant="danger" href={'/os'}> <FaRegTimesCircle /> Cancelar</Button>
            </div>

        </form>
    )
}

export default OsCadastro