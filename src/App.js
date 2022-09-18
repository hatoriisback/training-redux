// import logo from "./logo.svg";
import "./App.css";
import CounterFn from "./components/CounterFn";
import CounterClass from "./components/CounterClass";
import UserListFn from "./components/UserListFn";
import UserListClass from "./components/UserListClass";
import AuthLoginForm from "./components/AuthLoginForm";

function App() {
  return (
    <div className="App">
      <CounterFn />
      <br />
      <hr />
      <CounterClass />
      <br />
      <hr />
      <UserListFn />
      <br />
      <hr />
      <UserListClass />
      <br />
      <hr />
      <AuthLoginForm />
    </div>
  );
}

export default App;
