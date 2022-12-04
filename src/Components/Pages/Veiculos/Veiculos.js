import React from 'react'
import VeiculosTable from './VeiculosTable'
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import styles from "./Veiculos.module.css";

function VeiculosListagem(){
    const [veiculos, setVeiculos] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/vehicle', {
        method: 'GET',
        headers: {
                'Content-Type': 'application/json', 
            },
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setVeiculos(data.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return(
        <div className={styles.form}>
            <div className={styles.titulo}>
                <h1>Lista de <span>Veiculos</span></h1>
            </div>
        <Table  responsive bordered >
            <thead className={styles.item}>
                <tr>
                    <th>Proprietario</th>
                    <th>Modelo</th>
                    <th>Marca</th>
                    <th>Placa</th>
                    <th>N° Renavan</th>
                </tr>
            </thead>
            <tbody >
                <tr className={styles.item}>
                    <td>
                    {veiculos.length > 0 && veiculos.map((veiculo) =>
                        <VeiculosTable
                            id={veiculo.id}
                            nome={veiculo.client_id} 
                        />
                    )}
                    </td>
                    <td>
                    {veiculos.length > 0 && veiculos.map((veiculo) =>
                        <VeiculosTable
                            modelo={veiculo.modelo}
                        />
                    )}
                    </td>
                    <td>
                    {veiculos.length > 0 && veiculos.map((veiculo) =>
                        <VeiculosTable
                            marca={veiculo.marca}
                        />
                    )}
                    </td>
                    <td>
                    {veiculos.length > 0 && veiculos.map((veiculo) =>
                        <VeiculosTable
                            placa={veiculo.placa}
                        />
                    )}
                    </td>
                    <td>
                    {veiculos.length > 0 && veiculos.map((veiculo) =>
                        <VeiculosTable
                            renavan={veiculo.renavan}
                        />
                    )}
                    </td>
                </tr>
            </tbody>

        </Table>
        </div>
    )
 }

 export default VeiculosListagem