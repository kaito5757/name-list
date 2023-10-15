import styles from "./Button.module.css";

type ButtonProp = {
  children: string;
};

export default function Button(props: ButtonProp) {
  return (
    <button type="button" className={styles.red}>
      {props.children}
    </button>
  );
}
