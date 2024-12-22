import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
	// props is an object which contains all the attributes passed to the component
	return (
		<div>
			<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>								{/* using backticks to use template literals*/}
				<div className="container-fluid">
					
					<a className="navbar-brand" href="textutils/src/components/Navbar.js">
					{props.title}
					</a>

					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="/">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="/">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									{props.aboutText}
								</a>
							</li>
						</ul>

						{/* <form className="d-flex" role="search">
							<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn btn-outline-success" type="submit">Search</button>
						</form> */}

						<div className="form-check form-switch text-${mode}">
							<input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
							<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
						</div>

					</div>
				</div>
			</nav>
		</div>
	);
}


// DEFINING DATATYPES OF PROPS

Navbar.propTypes = {			// to check the type of props passed to the component
	title: PropTypes.string,
	aboutText: PropTypes.string,
}; 

// DEFINING SOME DEFAULT VALUES OF PROPS IN CASE NOT PASSED

Navbar.defaultProps = {			// default props if not passed
	title: 'Title Here',
	aboutText: 'About Here',
};