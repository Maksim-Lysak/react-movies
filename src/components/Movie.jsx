import React, { Component } from 'react';

export class Movie extends Component {
	render() {
		const { Title, Year, Type, Poster } = this.props;
		return (
			<div className='card movie'>
				<div className='card-image waves-effect waves-block waves-light'>
					<img className='activator' src={Poster} alt='poster' />
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
						{Title}
					</span>
					<p>
						{Year} <span className='right'>{Type}</span>
					</p>
				</div>
			</div>
		);
	}
}
