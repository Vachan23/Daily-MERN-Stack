import React from "react";
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch("https://retoolapi.dev/BUCPSc/posts/")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		// if (!DataisLoaded) return <div>
		// 	<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Task 3 </h1> {
				items.map((item) => (
                // <ol> : ordered list 
				<ol key = { item.id } >   
					id: { item.id },
					body: { item.body },
					title: { item.title }
					</ol>
				))
			}
		</div>
	);
}
}

export default App;
