type GreetProps = {
  name: string;
  age?: number;
  isLoggedin: boolean;
};

export const Greet = ({ name, isLoggedin, ...props }: GreetProps) => {
  const { age = 23 } = props; // default value
  return (
    <h1>
      {isLoggedin ? `hello ${name} of age ${age}` : `Hello user`}
    </h1>
  );
};
