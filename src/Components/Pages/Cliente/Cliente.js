import React from 'react'
import ClienteLinha from './ClienteLinha'
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import styles from "./Cliente.module.css";

function ClientesListagem(){
    const [clientes, setClientes] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/client', {
        method: 'GET',
        headers: {
                'Content-Type': 'application/json', 
            },
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setClientes(data.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return(
        <div className={styles.form}>
            <div className={styles.titulo}>
                <h1>Lista de <span>Clientes</span></h1>
            </div>
        <Table  responsive bordered >
            <thead className={styles.item}>
                <tr>
                    <th>Nome</th>
                    <th>Genêro</th>
                    <th>CPF</th>
                    <th>RG</th>
                    <th>Endereço</th>
                    <th>Numero</th>
                    <th>Bairro</th>
                    <th>Cidade</th>
                    <th>UF</th>
                </tr>
            </thead>
            <tbody >
                <tr className={styles.item}>
                    <td>
                    {clientes.length > 0 && clientes.map((cliente) =>
                        <ClienteLinha
                            id={cliente.id}
                            nome={cliente.nome} 
                        />
                    )}
                    </td>
                    <td>
                    {clientes.length > 0 && clientes.map((cliente) =>
                        <ClienteLinha
                            genero={cliente.genero}
                        />
                    )}
                    </td>
                    <td>
                    {clientes.length > 0 && clientes.map((cliente) =>
                        <ClienteLinha
                            cpf={cliente.cpf}
                        />
                    )}
                    </td>
                    <td>
                    {clientes.length > 0 && clientes.map((cliente) =>
                        <ClienteLinha
                            rg={cliente.rg}
                        />
                    )}
                    </td>
                    <td>
                    {clientes.length > 0 && clientes.map((cliente) =>
                        <ClienteLinha
                            logradouro={cliente.logradouro}
                        />
                    )}
                    </td>
                    <td>
                    {clientes.length > 0 && clientes.map((cliente) =>
                        <ClienteLinha
                            numero={cliente.numero}
                        />
                    )}
                    </td>
                    <td>
                    {clientes.length > 0 && clientes.map((cliente) =>
                        <ClienteLinha
                            bairro={cliente.bairro}
                        />
                    )}
                    </td>
                    <td>
                    {clientes.length > 0 && clientes.map((cliente) =>
                        <ClienteLinha
                            cidade={cliente.cidade}
                        />
                    )}
                    </td>
                    <td>
                    {clientes.length > 0 && clientes.map((cliente) =>
                        <ClienteLinha
                            uf={cliente.uf}
                        />
                    )}
                    </td>
                </tr>
            </tbody>

        </Table>
        </div>
    )
 }

 export default ClientesListagem