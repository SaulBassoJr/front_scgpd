import React from 'react'
import ServicosTable from './ServicosTable'
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
                <tr className={styles.item}>
                    <td>
                    {servicos.length > 0 && servicos.map((servico) =>
                        <ServicosTable
                            id={servico.id}
                            nome={servico.nome} 
                        />
                    )}
                    </td>
                    <td>
                    {servicos.length > 0 && servicos.map((servico) =>
                        <ServicosTable
                            valorDespa={servico.valorDespachante}
                        />
                    )}
                    </td>
                    <td>
                    {servicos.length > 0 && servicos.map((servico) =>
                        <ServicosTable
                            valorDetran={servico.valorDetran}
                        />
                    )}
                    </td>
                </tr>
            </tbody>

        </Table>
        </div>
    )
 }

 export default ServicosListagem