import React from 'react'
import ServicoDelete from './ServicoDelete'
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import styles from "./Servicos.module.css";

function ServicosListagem(){
    const [servicos, setServicos] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/serviceProvided', {
        method: 'GET',
        headers: {
                'Content-Type': 'application/json', 
            },
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setServicos(data.data)
            })
            .catch((err) => console.log(err))
    }, [])

    function removeServico(id) {
        fetch(`http://127.0.0.1:8000/api/client/${id}`, {
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json', 
        },
        }).then((resp) => resp.json())
        .then(data => {
            setServicos(servicos.filter((servico) => servico.id !== id))
        })
        .catch((err) => console.log(err))
    }


    return(
        <div className={styles.form}>
            <div className={styles.titulo}>
                <h1>Lista de <span>Serviços</span></h1>
            </div>
        <Table  responsive bordered >
            <thead className={styles.item}>
                <tr>
                    <th>Nome</th>
                    <th>Valor Despachante</th>
                    <th>Valor Detran</th>
                </tr>
            </thead>
            <tbody >
                    {servicos.length > 0 && servicos.map((servico) =>
                        <tr>  
                            <td>
                            {servico.nome}
                            </td>
                            <td>
                            {servico.valorDespachante}
                            </td>
                            <td>
                            {servico.valorDetran}
                            </td>
                            <td>
                                <ServicoDelete 
                                    id={servico.id} 
                                    handleRemove={removeServico}
                                />
                            </td>
                        </tr>
                    )}
            </tbody>
        </Table>
        </div>
    )
 }

 export default ServicosListagem