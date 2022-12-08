import React from "react";
import styles from './Servicos.module.css'
import ServicosCadastro from "./servicos.cadastro";

function NewServicos(){
    
    return (
        <div className={styles.form}>
            <div className={styles.titulo}>
                <h1 className={styles.h1}> 
                    Cadastro de Serviços
                </h1>
            </div>
            <ServicosCadastro />
        </div>
    )
}

export default NewServicos