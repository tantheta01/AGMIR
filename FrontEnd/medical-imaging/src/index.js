import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import State from "./components/States/Mainstate"
import Modal from "react-modal";

Modal.setAppElement("#root");

ReactDOM.render(
  <State/>,
  document.getElementById("root")
);

// The Mechanism Earlier was that the index was rendering the App and the App was calling Every component based on the URL 
// Now Me created Another file (components/States/Mainstate.js) So It shall store the state of the current user if he is logged in i.e. name and ID and it shall be empty if the user is not logged in
// So the Index.js(this file) now callls the state file and the state file calls the App file passing the doctor name. The App file passes the Doctor name to 
// The pofile waala file. Now we also need to create a reverse binding that is the Login waala pages should pass the data to this file and it will send it to the backend.