import styles from './Os.module.css'
import Input from '../../Forms/Input'
import Select from '../../Forms/Select'
import SubmitButton from '../../Forms/SubmitButton'
import {FaRegSave, FaRegTimesCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {useState} from 'react'

function OsCadastro(){
    const [formData, setFormData] = useState();
    return(
        <form className={styles.form}>

            <h1 className={styles.h1}>Registrar Os's</h1>

            <div className={styles.par}>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="string" text="*Placa" name="placa" placeholder="Insira a placa"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="text" text="*Moodelo" name="name" placeholder="Insira o modelo do veiculo"/>
                <Select name="category_id" text="*Debitos?"/>
                <Select name="category_id" text="*Financiamento?"/>
            </div>

            <div className={styles.par}>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="text" text="*Nome do Cliente" name="name" placeholder="Insira o nome"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="integer" text="*CPF" name="cpf" placeholder="Insira o CPF"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="text" text="*N° Telefone Celular" name="numero" placeholder="Insira o numero"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="text" text="*Serviço(s)" name="name" placeholder="Insira o(s) serviço(s)"/>
            </div>

            <div className={styles.par}>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="float" text="*Valor Serviço(s)" name="value" placeholder="Insira o valor"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="number" text="*Prazo" name="number" placeholder="Insira o prazo"/>
                <Select name="category_id" text="*Conversão Merco Sul?"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="text" text="*Observações" name="text" placeholder="Insira as observações"/>
            </div>

            <div className={styles.um}>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="date" text="*Data" name="date"/>
            </div>

            <p className={styles.p}> Em caso de comunicação de venda preencha </p>

            <div className={styles.par}>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="float" text="*Valor Veiculo" name="name" placeholder="Insira o valor"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="date" text="*Data de Venda" name="date"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="date" text="*Data de Vencimento" name="date"/>
                
            </div>

            <div className={styles.par}>
                <Link to ='/os'><SubmitButton icon={<FaRegSave/>} text="Salvar"/></Link>
                <Link to ='/os'><SubmitButton icon={<FaRegTimesCircle/>} text="Cancelar"/></Link>
            </div>

        </form>
    )
}

export default OsCadastro