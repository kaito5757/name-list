import styles from "./Button.module.css";

type ButtonProp = {
  children: string;
};

export const Button = (props: ButtonProp): JSX.Element => {
  return (
    <button type="button" className={styles.red}>
      {props.children}
    </button>
  );
};
