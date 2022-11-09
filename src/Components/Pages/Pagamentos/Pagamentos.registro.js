import styles from './Pagamentos.module.css'
import Input from '../../Forms/Input'
import Select from '../../Forms/Select'
import SubmitButton from '../../Forms/SubmitButton'
import {FaRegSave, FaRegTimesCircle} from 'react-icons/fa'
import { useState } from 'react'
import {Link} from 'react-router-dom'

function PagamentosRegistro(){
    const [formData, setFormData] = useState();
    return(
        <form className={styles.form}>
            <h1 className={styles.h1}>Registrar Pagamentos</h1>
            <div className={styles.par}>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="text" text="*Serviço" name="name" placeholder="Insira o tipo de serviço"/>
                <Select name="category_id" text="*Forma de pagamento"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="date" text="*Data" name="date"/>
            </div>
            <div className={styles.par}>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="float" text="*Valor" name="valor" placeholder="Insira o valor"/>
                <Select name="category_id" text="*Status do Pagamento"/>
            </div>
            <div className={styles.par}>
                <Link to ='/pagamentos'><SubmitButton icon={<FaRegSave/>} text="Salvar"/></Link>
                <Link to ='/pagamentos'><SubmitButton icon={<FaRegTimesCircle/>} text="Cancelar"/></Link>
            </div>
        </form>
    )
}

export default PagamentosRegistro
