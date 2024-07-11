import './MainButton.css';

interface ButtonProps {
  text: string;
}

const MainButton: React.FC<ButtonProps> = ({text}) => {
  return (
    <button className="button fs-200 my-5">
      <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text">{text}</span>
      </span>
    </button>
  );
};

export default MainButton;
