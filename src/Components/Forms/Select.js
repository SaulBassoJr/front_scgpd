import styles from "./Select.module.css";

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name} value={value}>
        <option>Selecione...</option>
        {options?.map((option, index) => (
          <option onSelect={() => handleOnChange(option)} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
