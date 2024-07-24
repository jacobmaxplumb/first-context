import "./App.css";
import {
  InformationProvider,
} from "./contexts/InformationContext";
import { Form } from "./components/Form";
import { Info } from "./components/Info";
import { Another } from "./components/Another";
import { TodosProvider } from "./contexts/TodosContext";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <InformationProvider>
        <Form />
        <Info />
      </InformationProvider>
      <Another />
      <TodosProvider>
        <TodoForm />
        <TodoList />
      </TodosProvider>
    </div>
  );
}

export default App;
