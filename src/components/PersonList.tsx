type PersonListProps = {
  names: {
    firstName: string;
    lastName: string;
  }[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <p key={name.firstName}>
          {name.firstName} {name.lastName}
        </p>
      ))}
    </div>
  );
};
