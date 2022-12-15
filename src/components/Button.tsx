type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

let id = 1;
const Button = ({ handleClick }: ButtonProps) => {
  return (
    <button
      onClick={(event) => {
        handleClick(event, id);
        id = id + 1;
      }}
    >
      Click Me
    </button>
  );
};

export default Button;
