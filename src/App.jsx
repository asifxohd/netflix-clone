import Navbar from "./Header/nav"
import Banner from "./Banner/banner";
import React from "react";
import Card from "./cardBody/card";
import Footer from "./Footer/footer";

function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<Banner/>
			<Card/>
			<Footer/>
		</React.Fragment>
	);

}

export default App
