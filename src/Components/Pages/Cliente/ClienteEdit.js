import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaRegTimesCircle, FaRegSave } from "react-icons/fa";
import { Link } from "react-router-dom";
import Input from "../../Forms/Input";
import Select from "../../Forms/Select";
import SubmitButton from "../../Forms/SubmitButton";
import styles from "./Cliente.module.css";



function ClienteEdit() {

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

  const {id} = useParams()
  console.log(id) 
  const [cliente, setCliente] = useState([])

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/client/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((resp) => resp.json())
    .then((data) => {
        setCliente(data.data)
    })
    .catch(err => console.log)
  }, [id])




  return (
    <form className={styles.form}>
      <div className={styles.titulo}>
      <h1 className={styles.h1}> Editar Cliente</h1>
      
      </div>
      <div>
        <Input
          type="text"
          text="*Nome"
          name="name"
          placeholder="Insira o nome do cliente"
          maxlength="100"
        />
      
        </div>
        
      <div className={styles.par}>
        <Input
          type="integer"
          text="*CPF"
          name="cpf"
          mask="999.999.999-99"
          placeholder="Insira o CPF"
        />
        <Input
          type="integer"
          text="*RG"
          name="rg"
          mask="99.999.999-9"
          placeholder="Insira o RG"
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
        />
        <Input
          type="text"
          text="*Logradouro"
          name="logradouro"
          placeholder="Insira o logradouro"
          maxlength="100"
        />
        </div>
      <div className={styles.par}>
        <Input
          type="text"
          text="*Bairro"
          name="bairro"
          placeholder="Insira o bairro"
          maxlength="100"
        />
        <Input
          type="text"
          text="*Numero"
          name="numero"
          placeholder="Insira o numero"
          maxlength="5"
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
        <Select name="category_id" text="*Tipo de Telefone" />
        <Input
          type="string"
          text="*N° Telefone Celular"
          name="telefone"
          placeholder="Insira o numero"
        />
      </div>
      <div className={styles.Boton}>
        <SubmitButton type="submit" icon={<FaRegSave />} text="Salvar" /> 

        <Link to="/clientes">
          <SubmitButton icon={<FaRegTimesCircle />} text="Cancelar" />
        </Link>
      </div>
      
    </form>
  );
}

export default ClienteEdit;