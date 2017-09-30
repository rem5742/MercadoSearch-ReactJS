import React, { Component } from 'react';

export default class Product extends Component
{
	render()
	{
		const {item} = this.props;
		return (
			<div className="Product" id={item.id}>
				<img className="product-photo" src={item.thumbnail} />
				<div className="product-name">{item.title}</div>
				<div className="product-price">$ {item.price}</div>
				<div className="product-sold">{item.sold_quantity} - Vendidos</div>
				<a target="_blank" href={item.permalink}>Ver en mercadolibre.com</a>
			</div>
		)
	};
}