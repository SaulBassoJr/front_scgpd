import axios from "axios";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Input from "../../Forms/Input";
import Select from "../../Forms/Select";
import SubmitButton from "../../Forms/SubmitButton";
import styles from "./Cliente.module.css";

// axios.defaults.baseURL = process.env.REACT_APP_BE_URL;
axios.defaults.baseURL = "172.24.160.74:8000";

function ClientesCadastro() {
  const [formData, setFormData] = useState();

  const saveClient = async () => {
    const data = JSON.stringify({
      nome: formData.nome,
      genero: "M",
      cpf: "000.000.000.00",
      rg: "123456789",
      cep: "84020428",
      logradouro: "logradouro logradouro",
      numero: "42",
      bairro: "bairro bairro",
      uf: "uf",
      cidade: "cidade",
      telefones: [
        {
          tipo: "Residencial",
          numero: 42988888888,
        },
        {
          tipo: "Celular",
          numero: 42999999999,
        },
      ],
    });
    console.log("responseresponse", data);

    const response = await axios.post("/client", data);
  };

  return (
    <form className={styles.form}>
      <h1 className={styles.h1}> Cadastro de Clientes</h1>
      <div className={styles.par}>
        <Input
          handleOnChange={(event) =>
            setFormData((e) => ({ ...e, nome: event.target.value }))
          }
          type="text"
          text="*Nome"
          name="name"
          placeholder="Insira o nome do cliente"
          maxlength="100"
        />
        <Input
          handleOnChange={(event) =>
            setFormData((e) => ({ ...e, cpf: event.target.value }))
          }
          type="integer"
          text="*CPF"
          name="cpf"
          mask="999.999.999-99"
          placeholder="Insira o CPF"
        />
        <Input
          handleOnChange={(event) =>
            setFormData((e) => ({ ...e, rg: event.target.value }))
          }
          type="integer"
          text="*RG"
          name="rg"
          mask="99.999.999-9"
          placeholder="Insira o RG"
        />
        <Select name="category_id" text="*Gênero" />
      </div>
      <div className={styles.par}>
        <Input
          handleOnChange={(event) =>
            setFormData((e) => ({ ...e, cep: event.target.value }))
          }
          type="integer"
          text="*CEP"
          name="cep"
          mask="99999-999"
          placeholder="Insira o CEP"
        />
        <Input
          handleOnChange={(event) =>
            setFormData((e) => ({ ...e, rg: event.target.value }))
          }
          type="text"
          text="*Logradouro"
          name="logradouro"
          placeholder="Insira o logradouro"
          maxlength="100"
        />
        <Input
          handleOnChange={(event) =>
            setFormData((e) => ({ ...e, logradouro: event.target.value }))
          }
          type="text"
          text="*Bairro"
          name="bairro"
          placeholder="Insira o bairro"
          maxlength="100"
        />
        <Input
          handleOnChange={(event) =>
            setFormData((e) => ({ ...e, numero: event.target.value }))
          }
          type="text"
          text="*Numero"
          name="numero"
          placeholder="Insira o numero"
          maxlength="5"
        />
      </div>
      <div className={styles.par}>
        <Select
          name="category_id"
          text="*UF"
          value={formData.uf}
          options={["PR", "RS", "MG"]}
          handleOnChange={(uf) =>
            setFormData((e) => ({
              ...e,
              uf,
            }))
          }
        />
        <Select
          name="category_id"
          text="*Cidade"
          value={formData.cidade}
          handleOnChange={(cidade) =>
            setFormData((e) => ({
              ...e,
              cidade,
            }))
          }
        />
        <Select name="category_id" text="*Tipo de Telefone" />
        <Input
          handleOnChange={(event) =>
            setFormData((e) => ({ ...e, celular: event.target.value }))
          }
          type="string"
          text="*N° Telefone Celular"
          name="telefone"
          placeholder="Insira o numero"
        />
      </div>
      <div className={styles.par}>
        {/* <SubmitButton onClick={saveClient} icon={<FaRegSave />} text="Salvar" /> */}
        <button onClick={saveClient} title="AAA" style={{ width: 100 }} />

        <Link to="/clientes">
          <SubmitButton icon={<FaRegTimesCircle />} text="Cancelar" />
        </Link>
      </div>
    </form>
  );
}

export default ClientesCadastro;
