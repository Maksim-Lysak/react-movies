import React, { Component } from 'react';

export class Header extends Component {
	render() {
		return (
			<nav className='green darken-3'>
				<div className='nav-wrapper px1'>
					<a href='#' className='brand-logo'>
						Movies
					</a>
					<ul id='nav-mobile' className='right hide-on-med-and-down'>
						<li>
							<a href='sass.html'>repo</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
