import React, { Component } from 'react';
import { Search } from '../components/Search';
import { MovieList } from '../components/MovieList';
import { Preloader } from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

export class Main extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			loading: true,
		};
		this.getContent = this.getContent.bind(this);
	}

	getContent(str = 'demon', type = 'all') {
		this.setState({ loading: true });
		fetch(
			`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
				type !== 'all' ? `&type=${type}` : ''
			}`
		)
			.then((response) => response.json())
			.then((data) => this.setState({ movies: data.Search, loading: false }));
	}

	componentDidMount() {
		this.getContent();
	}

	render() {
		const { loading } = this.state;

		return (
			<main className='container content'>
				<Search search={this.getContent} />

				{loading ? <Preloader /> : <MovieList Movies={this.state.movies} />}
			</main>
		);
	}
}
