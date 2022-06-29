//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Navbar from "./component/Navbar.jsx"
import Jumbotron from "./component/Jumbotron.jsx";
import Card from "./component/Card.jsx"
import Footer from "./component/Footer.jsx"

//render your react application
ReactDOM.render(
	<Navbar 
		title="Start Bootstrap"
		btn1Label="Home"
		btn2Label="About"
        btn3Label="Contact"
        btn4Label="Services"
	/>,
	document.querySelector("#app")
);
ReactDOM.render(
	<Jumbotron
		title="A Warm Welcome!"
		descripcion=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis debitis itaque placeat, repellat molestias necessitatibus asperiores autem laborum. "
		btnLabel="Call to action"
        
	/>,
	document.querySelector("#jumb")
);
let content =[<Card/>,<Card/>,<Card/>,<Card/>,]
ReactDOM.render(
	content,
	document.querySelector("#car")
);
ReactDOM.render(
	<Footer/>,
	document.querySelector("#foot")
);

