import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,  CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent'

function RenderMenuItem ({dish, onClick}) {
	return (
		//onClick={dish => this.onDishSelect(dish.id)}
		//onClick={() => onClick(dish.id)
		<Card onClick={dish => this.onDishSelect(dish.id)}> 
			<CardImg width="100%" src={dish.image} alt={dish.name} />
			<CardImgOverlay>
				<CardTitle>{dish.name}</CardTitle>
			</CardImgOverlay>
		</Card>
	);
}



class Menu extends Component  {
	constructor(props) {
		super(props);
		this.state = {
            dishes : this.props.dishes,
            selectedDish : null
        };
	}

	onDishSelect(dish) {
        this.setState ({ selectedDish : dish.id});
    }


	render () {
		const menu = this.state.dishes.map((dish) => {
			return (
				<div key={dish.id} className="col-12 col-md-5 m-1">
				   <Card onClick={() => this.onDishSelect(dish)}> 
						<CardImg width="100%" src={dish.image} alt={dish.name} />
						<CardImgOverlay>
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
					</Card>
				</div>
				);
		});
		

		return (
			<div className="container">
				<div className="row">
						{menu}
				</div>
				<div className="row">
				  <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
				</div>
			</div>

		);
	}
}

		


export default Menu;