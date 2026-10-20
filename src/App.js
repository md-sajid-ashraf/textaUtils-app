import React, {useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import Footer from "./components/Footer";

import 
{
  BrowserRouter as Router, 
  Switch, 
  Route, 
  // Link
} from "react-router-dom";

function App() {
  // useState
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");
  const [changeText, setChangeText] = useState("Enable");

  // alert function
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // toggle Function for change mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setChangeText("Disable");
      showAlert("Darkmode has been enabled", "success");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      setChangeText("Enable");
      showAlert("Light has been enabled", "success");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} changeText={changeText} />
      <Alert alert={alert} />
      <div className="conatainer my-3">
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/home">
            <TextForm mode={mode} showAlert={showAlert} />
          </Route>
          <Route exact path="/">
            <TextForm mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </div>
      <Footer mode={mode} />
    </Router>
  );
}

export default App;
