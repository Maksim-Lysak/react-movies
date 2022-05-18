import React, { Component } from 'react';

export class Preloader extends Component {
	render() {
		return (
			<div className='progress'>
				<div className='indeterminate'></div>
			</div>
		);
	}
}
