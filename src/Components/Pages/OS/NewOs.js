import OsCadastro from "./Os.cadastro";
import styles from "./Os.module.css";




function NewOs(){

    function createPost(os){
        fetch('http://127.0.0.1:8000/api/os', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(os),
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
                    Registrar Os's
                </h1>
            </div>
            <OsCadastro handleSubmit={createPost} />
        </div>
    )
}

export default NewOs;