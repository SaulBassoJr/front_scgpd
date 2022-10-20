import styles from './Veiculos.module.css'
import Input from '../../Forms/Input'
import Select from '../../Forms/Select'
import SubmitButton from '../../Forms/SubmitButton'
import {FaRegSave, FaRegTimesCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {useState} from 'react'

function VeiculosCadastro(){
    const [formData, setFormData] = useState();
    return(
        <form className={styles.form}>
            <h1 className={styles.h1}> Cadastro de Veiculos</h1>
            <div className={styles.par}>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="text" text="*Proprietário" name="name" placeholder="Insira o nome do proprietário"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="text" text="*Placa" name="placa" placeholder="Insira o placa"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="integer" text="*N° Renavan" name="renavan" placeholder="Insira o renavan"/>
            </div>
            <div className={styles.par}>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="text" text="*Marca" name="name" placeholder="Insira a marca"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="string" text="*Modelo" name="name" placeholder="Insira o modelo"/>
                <Select name="category_id" text="*Débitos"/>
            </div>
            <div className={styles.par}>
                <Link to ='/veiculos'><SubmitButton icon={<FaRegSave/>} text="Salvar"/></Link>
                <Link to ='/veiculos'><SubmitButton icon={<FaRegTimesCircle/>} text="Cancelar"/></Link>
            </div>
        </form>
    )
}

export default VeiculosCadastro