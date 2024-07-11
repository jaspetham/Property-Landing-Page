import styles from "./SpecialButton.module.scss";

interface ButtonProps {
  text: string;
  containerClass: string;
}

const SpecialButton: React.FC<ButtonProps> = ({text, containerClass}) => {
  return (
    <a className={styles[`${containerClass}`]} href="#">
      <span className={styles['top-key']}></span>
      <span className={styles.text}>{text}</span>
      <span className={styles['bottom-key-1']}></span>
      <span className={styles['bottom-key-2']}></span>
    </a>
  );
};

export default SpecialButton;
