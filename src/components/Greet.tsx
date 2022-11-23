type GreetProps = {
  name: string;
  age?: number;
  isLoggedin: boolean;
};

export const Greet = (props: GreetProps) => {
  const { age = 23 } = props;
  return (
    <h1>
      {props.isLoggedin ? `hello ${props.name} of age ${age}` : `Hello user`}
    </h1>
  );
};
