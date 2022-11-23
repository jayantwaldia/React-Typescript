import "./App.css";
import { Greet } from "./components/Greet";
import Heading from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "Jay",
    last: "Wal",
  };

  const nameList = [
    {
      firstName: "Jay",
      lastName: "Wal ",
    },
    {
      firstName: "Neh",
      lastName: "Gup",
    },
    {
      firstName: "Kun",
      lastName: "Lun",
    },
  ];

  return (
    <div className="App">
      <Greet name="Jayant" age={23} isLoggedin={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to the Ice-Cream parlour</Heading>
      </Oscar>
    </div>
  );
}

export default App;
