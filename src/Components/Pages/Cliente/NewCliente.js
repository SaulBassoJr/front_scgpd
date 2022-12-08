import {unstable_HistoryRouter} from 'react-router-dom'

import ClientesCadastro from "./Cliente.cadastro";
import styles from "./Cliente.module.css";




function NewCliente(){

    function createPost(cliente){
        fetch('http://127.0.0.1:8000/api/client', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(cliente),
        }).then((resp) => resp.json())
        .then((data) =>{
            console.log(data.data)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.form}>
            <div className={styles.titulo}>
                <h1 className={styles.h1}> 
                    Cadastro de Clientes
                </h1>
            </div>
            <ClientesCadastro handleSubmit={createPost} />
        </div>
    )
}

export default NewCliente;