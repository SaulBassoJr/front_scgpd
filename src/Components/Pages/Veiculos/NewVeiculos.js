import VeiculosCadastro from "./Veiculos.cadastro";
import styles from "./Veiculos.module.css";




function NewVeiculos(){

    function createPost(veiculo){
        fetch('http://127.0.0.1:8000/api/vehicle', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(veiculo),
        }).then((resp) => resp.json())
        .then((data) =>{
            console.log(data)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.form}>
            <div className={styles.titulo}>
                <h1 className={styles.h1}> 
                    Cadastro de Veiculos
                </h1>
            </div>
            <VeiculosCadastro handleSubmit={createPost} />
        </div>
    )
}

export default NewVeiculos;