import React, { Component } from 'react';

export class Footer extends Component {
	render() {
		return (
			<footer className='page-footer green darken-3'>
				<div className='footer-copyright'>
					<div className='container'>
						© {new Date().getFullYear()} Сreated by Maksim Lysak
						<a className='grey-text text-lighten-4 right' href='#!'>
							repo
						</a>
					</div>
				</div>
			</footer>
		);
	}
}
