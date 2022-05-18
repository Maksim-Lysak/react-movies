import React, { Component } from 'react';
import { Movie } from './Movie';

export class MovieList extends Component {
	render() {
		const { Movies = [] } = this.props;
		return (
			<div className='movies'>
				{Movies.length ? (
					Movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
				) : (
					<h4>что-то пошло не так</h4>
				)}
			</div>
		);
	}
}
