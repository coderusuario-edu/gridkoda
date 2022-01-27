import React from 'react';
import logo from '../logo.png';

function Navbar() {
	return <div>
		<nav className="navbar navbar-expand-lg navbar-light bg-gk-gradient">
			<div className="container-fluid">
				<a href="#" className="navbar-brand">
					<img src={logo} alt="GridKoda" width="15%"/></a>
				<button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a href="#" className="nav-link">Más comprados</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">Promociones</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">Contacto</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>


	</div>;
}

export default Navbar;