import React from 'react'
import VeiculoDelete from './VeiculoDelete'
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

    function removeVeiculo(id) {
        fetch(`http://127.0.0.1:8000/api/vehicle/${id}`, {
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json', 
        },
        }).then((resp) => resp.json())
        .then(data => {
            setVeiculos(veiculos.filter((veiculo) => veiculo.id !== id))
        })
        .catch((err) => console.log(err))
    }

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
                    <th> </th>
                </tr>
            </thead>
            <tbody >
                {veiculos.length > 0 && veiculos.map((veiculo) =>
                    <tr>
                        <td>
                            {veiculo.client_id}
                        </td>
                        <td>
                            {veiculo.modelo}
                        </td>
                        <td>
                            {veiculo.marca}
                        </td>
                        <td>
                            {veiculo.placa}
                        </td>
                        <td>
                            {veiculo.renavan}
                        </td>
                        <td>  
                            <VeiculoDelete 
                                id={veiculo.id} 
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

 export default VeiculosListagem