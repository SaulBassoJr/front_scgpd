import styles from './Servicos.module.css'
import Input from '../../Forms/Input'
import SubmitButton from '../../Forms/SubmitButton'
import {FaRegSave, FaRegTimesCircle} from 'react-icons/fa'
import { useState } from 'react'
import {Link} from 'react-router-dom'

function ServicosCadastro(){
    const [formData, setFormData] = useState();
    return(
        <form className={styles.form}>
            <h1 className={styles.h1}>Cadastro de Serviços</h1>
            <div className={styles.par}>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="text" text="*Nome do Serviço" name="name" placeholder="Insira o nome" maxlength="50"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="float" text="*Valor Detran" name="valor" placeholder="Insira o valor do Detran" maxlength="15"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="float" text="*Valor Despachante" name="valor" placeholder="Insira o valor da Despachante" maxlength="15"/>
            </div>
            <div className={styles.par}>
                <Link to ='/servicos'><SubmitButton icon={<FaRegSave/>} text="Salvar"/></Link>
                <Link to ='/servicos'><SubmitButton icon={<FaRegTimesCircle/>} text="Cancelar"/></Link>
            </div>
        </form>
    )
}

export default ServicosCadastro