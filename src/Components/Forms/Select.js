import styles from "./Select.module.css";

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} value={value}>
        <option>Selecione...</option>

        {options?.map((option) => (
          <option value={option.id} key={option.id} onChange={handleOnChange} >
            
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
