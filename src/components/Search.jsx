import React, { Component } from 'react';

export class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			type: 'all',
		};
		this.handleKey = this.handleKey.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
		this.handleButton = this.handleButton.bind(this);
	}

	handleKey(e) {
		if (e.key === 'Enter') {
			this.props.search(this.state.search, this.state.type);
		}
	}

	handleButton(e) {
		this.props.search(this.state.search, this.state.type);
	}

	handleFilter(event) {
		this.setState(
			() => ({ type: event.target.dataset.type }),
			() => {
				this.props.search(this.state.search, this.state.type);
			}
		);
	}

	render() {
		return (
			<div className='row'>
				<div className='input-field d-flex'>
					<button className='btn search-buttom' onClick={this.handleButton}>
						поиск
					</button>
					<input
						type='search'
						placeholder='search'
						className='validate'
						value={this.state.search}
						onChange={(e) => this.setState({ search: e.target.value })}
						onKeyDown={this.handleKey}
					/>
				</div>
				<div>
					<label className='movies-type'>
						<input
							className='with-gap'
							name='tyep'
							type='radio'
							data-type='all'
							defaultChecked={this.state.type === 'all'}
							onChange={this.handleFilter}
						/>
						<span>all</span>
					</label>
					<label className='movies-type'>
						<input
							className='with-gap'
							name='tyep'
							type='radio'
							data-type='movie'
							defaultChecked={this.state.type === 'movie'}
							onChange={this.handleFilter}
						/>
						<span>movies only</span>
					</label>
					<label className='movies-type'>
						<input
							className='with-gap'
							name='tyep'
							type='radio'
							data-type='series'
							defaultChecked={this.state.type === 'series'}
							onChange={this.handleFilter}
						/>
						<span>series only</span>
					</label>
				</div>
			</div>
		);
	}
}
