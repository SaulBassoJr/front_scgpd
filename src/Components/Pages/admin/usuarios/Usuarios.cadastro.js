import styles from './Usuarios.module.css'
import Input from '../../../Forms/Input'
//import Select from '../../../Forms/Select'
import SubmitButton from '../../../Forms/SubmitButton'
import {FaRegSave, FaRegTimesCircle} from 'react-icons/fa'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function UsuariosCadastro(){
    const [formData, setFormData] = useState();
    return(
        <form className={styles.form}>
            <h1 className={styles.h1}>Cadastro de Usuários</h1>
            <div className={styles.par}>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="text" text="*Nome" name="name" placeholder="Insira o nome do usuário" maxlength="100"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="text" text="*LoginName" name="name" placeholder="Insira o LoginName" maxlength="8"/>
            </div>
            <div className={styles.um}>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="string" text="*Email" name="email" placeholder="Insira o email" maxlength="50"/>
            </div>
            <div className={styles.par}>
                <Input
                    handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))} 
                    type="password" text="*Senha" name="password" placeholder="Defina a senha"  maxlength="10" minlength="8"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="password" text="*Confirme a Senha" name="password" placeholder="Confirme a senha"/>
            </div>
            <div className={styles.par}>
                <Button variant="primary" href={'/usuarios'}> <FaRegSave /> Salvar</Button>
                <h4> | </h4>
                <Button variant="danger" href={'/usuarios'}> <FaRegTimesCircle /> Cancelar</Button>
            </div>
        </form>
    )
}

export default UsuariosCadastro