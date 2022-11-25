import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <p key={name.first}>
          {name.first} {name.last}
        </p>
      ))}
    </div>
  );
};
