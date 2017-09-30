import React, { Component } from 'react';
import axios from 'axios';
import Product from './product';

export default class Search extends Component
{
	constructor()
	{
		super();
		this.state = { items: null, state: 'iddle' };
	}
	handleInput(e)
	{
		this.setState({input: e.target.value});
	}
	handleForm(e)
	{
		e.preventDefault();
		this.setState({state: 'requesting'});

		axios.get('https://api.mercadolibre.com/sites/MCO/search?q=' + e.target.querySelector('input').value)
			.then(res => {
				this.setState({items: res.data.results, state: 'iddle'});
			});
	}
	render()
	{
		const {logo} = this.props;
		return (
			<div className="search">
				<div className="search-header">
					<div className="search-wrapper">
						<div className="logo">
							<span className="logo-name">Mercadolibre Search - rem5742</span>
							<img className="logo-image" width="100px" src={logo} />
						</div>
						<form onSubmit={this.handleForm.bind(this)}>
							<input type="text" value={this.state.query} onChange={this.handleInput.bind(this)} />
							<input
								className={this.state.state}
								type="submit"
								value={this.state.state==='requesting'?' ':'Buscar'}
								disabled={this.state.state==='requesting'?'disabled':''} />
						</form>
					</div>
				</div>
				<div className="productlist">
					{
						this.state.items && this.state.items.length > 0
						?this.state.items.map((item, key) => <Product item={item} key={key} />)
						:<h2 align="center">Ingrese una palabra de búsqueda</h2>
					}
				</div>
			</div>
		)
	};
}