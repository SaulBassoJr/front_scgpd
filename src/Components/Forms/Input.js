import styles from './Input.module.css'
import InputMasK from "react-input-mask";

function Input({type, text, name, mask, placeholder, handleOnChange, value, maxlength,minlength}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <InputMasK type={type} name={name} mask={mask} id={name} maxlength={maxlength} minlength={minlength} placeholder={placeholder} 
            onChange={handleOnChange} value={value} />
        </div>
    )
}

export default Input