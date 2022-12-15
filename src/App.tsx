import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Greet } from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Counter } from "./components/state/Counter";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Jay",
      last: "Wal ",
    },
    {
      first: "Neh",
      last: "Gup",
    },
    {
      first: "Pam",
      last: "Tam",
    },
  ];

  return (
    <div className="App">
      <Greet name="Ligma" isLoggedin={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Placeholder Text</Heading>
      {/* Component Props */}
      <Oscar>
        <Heading>Oscar goes to the Ice-Cream parlour</Heading>
      </Oscar>
      <br />
      {/* Event Props */}
      <Button handleClick={(event, id) => {
        console.log('Button is clicked', event, id)
        id = id + 1
      }} />
      <br />
      <br />
      <Input value='' handleChange={event => console.log(event)} />
      <br />
      <br />
      <Container styles={{ border: '1px solid red', padding: '1rem' }} />
      <br />
      <LoggedIn />
      <br />
      <br />
      <User />
      <br />
      <br />
      <Counter />
      <br />
      <br />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
