
import React from 'react'
import OsDelete from './OsDelete'
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import styles from "./Os.module.css";

function OsListagem(){
    const [oss, setOss] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/os', {
        method: 'GET',
        headers: {
                'Content-Type': 'application/json', 
            },
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setOss(data.data)
            })
            .catch((err) => console.log(err))
    }, [])

    function removeOs(id) {
        fetch(`http://127.0.0.1:8000/api/os/${id}`, {
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json', 
        },
        }).then((resp) => resp.json())
        .then(data => {
            setOss(oss.filter((os) => os.id !== id))
        })
        .catch((err) => console.log(err))
    }


    return(
        <div className={styles.form}>
            <div className={styles.titulo}>
                <h1>Lista de <span>Os's</span></h1>
            </div>
        <Table  responsive bordered >
            <thead className={styles.item}>
                <tr>
                    <th>N° Os</th>
                    <th>Cliente</th>
                    <th>cpf</th>
                    <th>N° Telefone</th>
                    <th>Placa Veiculo</th>
                    <th>Modelo Veiculo</th>
                    <th>Debitos?</th>       
                    <th>Financiamento?</th>
                    <th>Serviços Prestados</th>
                    <th>Valor Serviço</th>
                    <th>Data</th>
                    <th>Prazo</th>
                    <th>Converção Merco Sul?</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody >
                    {oss.length > 0 && oss.map((os) =>
                        <tr> 
                            <td>
                            {os.id}
                            </td>
                            <td>
                            {os.cliente_id.nome}
                            </td>
                            <td>
                            {os.cliente_id.cpf} 
                            </td> 
                            <td>
                            {os.placa}
                            </td>
                            <td>
                            {os.modelo}
                            </td>
                            <td>
                            {os.debito}
                            </td>
                            
                            <td>
                            {os.telefone}
                            </td>
                            <td>
                            {os.servico_id.servico}
                            </td>
                            <td>
                            {os.valorservico}
                            </td>
                            <td>
                            {os.data}
                            </td>
                            <td>
                            {os.prazo}
                            </td>
                            <td>
                            {os.convesaomercosul}
                            </td>
                            
                            <td>
                                <OsDelete 
                                    id={os.id} 
                                    handleRemove={removeOs}
                                />
                            </td>
                        </tr>
                    )}
            </tbody>
        </Table>
        </div>
    )
 }

 export default OsListagem