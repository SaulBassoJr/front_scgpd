import {unstable_HistoryRouter} from 'react-router-dom'

import PagamentosRegistro from "./Pagamentos.registro";
import styles from "./Pagamentos.module.css";




function NewPagamentos(){

    function createPost(pagamento){
        fetch('http://127.0.0.1:8000/api/client', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(pagamento),
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
                    Registrar Pagamentos
                </h1>
            </div>
            <PagamentosRegistro handleSubmit={createPost} />
        </div>
    )
}

export default NewPagamentos