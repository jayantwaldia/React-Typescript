import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

export const PersonList = ({names}: PersonListProps) => {
  return (
    <div>
      {names.map((name) => (
        <p key={name.first}>
          {name.first} {name.last}
        </p>
      ))}
    </div>
  );
};
