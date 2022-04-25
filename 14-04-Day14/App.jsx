import "./App.css";
import CheckList from "./components/checkList/CheckList";
import FruitList from "./components/fruitList/FruitList";
import LoginForm from "./components/loginForm/LoginForm";

function App() {
  return (
    <div className="App">
      <h4>Exercise 1 and 2</h4>
      <FruitList />
      <h4>Exercise 3 </h4>
      <CheckList />
      <h4>Exercise 4 </h4>
      <LoginForm />
    </div>
  );
}

export default App;
