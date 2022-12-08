import React from 'react'
import PagamentoDelete from './PagamentoDelete'
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import styles from "./Pagamentos.module.css";

function PagamentosListagem(){
    const [pagamentos, setPagamentos] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/pagamentos', {
        method: 'GET',
        headers: {
                'Content-Type': 'application/json', 
            },
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setPagamentos(data.data)
            })
            .catch((err) => console.log(err))
    }, [])

    function removeVeiculo(id) {
        fetch(`http://127.0.0.1:8000/api/pagamentos/${id}`, {
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json', 
        },
        }).then((resp) => resp.json())
        .then(data => {
            setPagamentos(pagamentos.filter((pagamento) => pagamento.id !== id))
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className={styles.form}>
            <div className={styles.titulo}>
                <h1>Lista de <span>Pagamentos</span></h1>
            </div>
        <Table  responsive bordered >
            <thead className={styles.item}>
                <tr>
                    <th>Servico</th>
                    <th>Valor</th>
                    <th>Data</th>
                    <th>Forma de Pagamento</th>
                    <th>Status do Pagamneto</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody >
                {pagamentos.length > 0 && pagamentos.map((pagamento) =>
                    <tr>
                        <td>
                            {pagamento.servico_id}
                        </td>
                        <td>
                            {pagamento.valor}
                        </td>
                        <td>
                            {pagamento.data}
                        </td>
                        <td>
                            {pagamento.formapagamento}
                        </td>
                        <td>
                            {pagamento.statuspagamento}
                        </td>
                        <td>  
                            <PagamentoDelete 
                                id={pagamento.id} 
                                handleRemove={removeVeiculo}
                            />
                        </td>
                    </tr>
                )}
                    
            </tbody>

        </Table>
        </div>
    )
 }

 export default PagamentosListagem