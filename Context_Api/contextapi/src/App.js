import logo from "./logo.svg";
import "./App.css";
import { ThemeContext } from "./contexts/ThemeContextProvider";
import React, { useContext } from "react";
import { AuthContext } from "./contexts/AuthContextProvider";
import Navbar from "./contexts/Navbar";
function App() {
  //Consuming context
  const {theme,toggleTheme} = useContext(ThemeContext);
  const value = useContext(AuthContext);

  console.log("val from context is", theme);
  console.log(value)
  return (
    <div className="App">
      <Navbar/>
      <h1>context api theme: {theme}</h1>
      <h2>Auth: {value.isAuth==true?"true":"false"}</h2>
      <button onClick={toggleTheme} >Change Theme</button>
    </div>
  );
}

export default App;
