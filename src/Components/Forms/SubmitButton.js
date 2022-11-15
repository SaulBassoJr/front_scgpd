import styles from "./SubmitButton.module.css";

function Submitbutton({ text, icon, onClick }) {
  return (
    <div>
      <button onClick={onClick} className={styles.btn}>
        {icon} {text}
      </button>
    </div>
  );
}

export default Submitbutton;
