import React from 'react'
import ClienteDelete from './ClienteDelete'
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import styles from "./Cliente.module.css";

import Button from 'react-bootstrap/Button';
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

function ClientesListagem() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [clientes, setClientes] = useState([]);

    const [q, setQ] = useState("");
    const [searchParam] = useState(["nome", "cpf", "id"]);
    const [filterParam, setFilterParam] = useState(["All"]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/client', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setIsLoaded(true)
                setClientes(data.data)
            })
            .catch((error) => console.log(error))
    }, [])

    const data = Object.values(clientes);

    function search(clientes) {
        return clientes.filter((cliente) => {
            if (filterParam == "All") {
                return searchParam.some((newCliente) => {
                    return (
                        cliente[newCliente]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    }

    async function removeCliente(id) {

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer 2|1HaTYqT32UIWyjIhifWdaQSVrMZPJHCbF1Q0IYS0");

        const requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://127.0.0.1:8000/api/client/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        // .then((resp) => resp.json())
        // // .then(data => {
        // //     setClientes(clientes.filter((cliente) => cliente.id !== id))
        // // })
        // .catch((err) => console.log(err))
    }


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (
            <div className={styles.form}>
                <div className={styles.titulo}>

                    <h1>Lista de <span>Clientes</span></h1>
                    <div>
                        <Form.Control
                            type="search"
                            name="search-form"
                            id="search-form"
                            placeholder="Busca"
                            className="me-2"
                            aria-label="Search"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                    </div>
                </div>

                <Table responsive bordered size="sm" >
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
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody >
                        {search(data)?.map((cliente) =>
                            <tr >

                                <td>

                                    {cliente.nome}

                                </td>
                                <td>
                                    {cliente.genero}

                                </td>
                                <td>

                                    {cliente.cpf}

                                </td>
                                <td>

                                    {cliente.rg}

                                </td>
                                <td>
                                    {cliente.logradouro}

                                </td>
                                <td>

                                    {cliente.numero}

                                </td>
                                <td>

                                    {cliente.bairro}

                                </td>
                                <td>

                                    {cliente.cidade}

                                </td>
                                <td>

                                    {cliente.uf}

                                </td>
                                <td>
                                    <ClienteDelete
                                        id={cliente.id}
                                        handleRemove={removeCliente}
                                    />
                                </td>
                            </tr>
                        )}
                    </tbody>

                </Table>
            </div>
        )
    }
}

export default ClientesListagem