import { useState, useEffect } from "react";
import { FaRegTimesCircle, FaRegSave } from "react-icons/fa";
import { Link } from "react-router-dom";
import Input from "../../Forms/Input";
import Select from "../../Forms/Select";
import SubmitButton from "../../Forms/SubmitButton";
import styles from "./Cliente.module.css";

import Button from 'react-bootstrap/Button';



function ClientesCadastro({handleSubmit, clienteData}) {
  const [cliente, setCliente] = useState(clienteData || {})


  const [uf, setUf] = useState([]);
  const [listUf, setListUf] = useState([]);
  const [city, setCity] = useState([]);
  const [listCity, setListCity] = useState([]);
  function loadUf() {
      let url = 'https://servicodados.ibge.gov.br/';
      url = url + 'api/v1/localidades/estados';
      fetch(url)
        .then(response => response.json())
        .then(data => {        
          data.sort((a,b) => a.nome.localeCompare(b.nome));
          setListUf([...data]);
         });
  }
  function loadCity(id) {
      let url = 'https://servicodados.ibge.gov.br/api/v1/';
      url = url + `localidades/estados/${id}/municipios`;
      fetch(url)
        .then(response => response.json())
        .then(data => {        
          data.sort((a,b) => a.nome.localeCompare(b.nome));
          setListCity([...data]);
         });
  }
  useEffect(() => {
    loadUf();
  },[]);
  useEffect(() => {
    if (uf) {
      loadCity(uf);
    }
  }, [uf]);

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(cliente)
  }

  function handleChange(e) {
    setCliente({ ...cliente, [e.target.name]: e.target.value })
    console.log(cliente)
  }
  function handleSelect(e) {
    setCliente({ ...cliente, uf: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex]
    } })

    console.log(cliente)
  }


  return (
    <form  className={styles.form}>
      
      <div>
        <Input
          type="text"
          text="*Nome"
          name="nome"
          placeholder="Insira o nome do cliente"
          maxlength="100"
          handleOnChange={handleChange}
        />
      
        </div>
        
      <div className={styles.par}>
        <Input
          type="integer"
          text="*CPF"
          name="cpf"
          mask="999.999.999-99"
          placeholder="Insira o CPF"
          handleOnChange={handleChange}
        />
        <Input
          type="integer"
          text="*RG"
          name="rg"
          mask="99.999.999-9"
          placeholder="Insira o RG"
          handleOnChange={handleChange}
        />
      </div>
      <div className={styles.form_control}>
        <label htmlFor="genero_id">*Gênero</label>
        <select
          name="genero_id"  
        >
          <option>Selecione...</option>
          <option>M</option>
          <option>F</option>
          <option>O</option>
        </select>
      </div>
      <div className={styles.par}>
        <Input
          type="integer"
          text="*CEP"
          name="cep"
          mask="99999-999"
          placeholder="Insira o CEP"
          handleChange={handleChange}
        />
        <Input
          type="text"
          text="*Logradouro"
          name="logradouro"
          placeholder="Insira o logradouro"
          maxlength="100"
          handleOnChange={handleChange}
        />
        </div>
      <div className={styles.par}>
        <Input
          type="text"
          text="*Bairro"
          name="bairro"
          placeholder="Insira o bairro"
          maxlength="100"
          handleOnChange={handleChange}
        />
        <Input
          type="text"
          text="*Numero"
          name="numero"
          placeholder="Insira o numero"
          maxlength="5"
          handleOnChange={handleChange}
        />
      </div>
      <div>
      <div className={styles.form_control}>
        <label htmlFor="uf_id">*UF</label>
        <select
          value={uf}
          onChange={e => setUf(e.target.value)}
          
          name="uf_id"  
        >
          <option>Selecione...</option>
          {listUf.map((a,b) => (
            <option value={a.id}>{a.sigla}</option>
          ))}
        </select>
        
        <label htmlFor="city_id">*Cidade</label>
        <select
          value={city}
          onChange={e => setCity(e.target.value)}
          name="city_id"  
        >
          <option>Selecione...</option>
          {listCity.map((a,b) => (
            <option value={a.sigla}>{a.nome}</option>
          ))}
        </select>
        </div>
        </div>
        <div >
        <Select name="category_id" text="*Tipo de Telefone"  />
        <Input
          type="string"
          text="*N° Telefone Celular"
          name="telefone"
          placeholder="Insira o numero"
        />
      </div>
      <div className={styles.Boton}>
        <Button variant="primary" href={'/clientes'} onClick={submit}> <FaRegSave /> Salvar</Button>
        <h4> | </h4>
        <Button variant="danger" href={'/clientes'}> <FaRegTimesCircle /> Cancelar</Button>
      </div>
      
    </form>
  );
}

export default ClientesCadastro;
