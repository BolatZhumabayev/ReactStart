import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,  CardTitle , Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderMenuItem ({dish, onClick}) {
	return (
		//onClick={dish => this.onDishSelect(dish.id)}
		<Card > 
			<Link to={`/menu/${dish.id}`}>
					<CardImg width="100%" src={dish.image} alt={dish.name} />
					<CardImgOverlay>
						<CardTitle>{dish.name}</CardTitle>
					</CardImgOverlay>
				</Link>
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

	// onDishSelect(dish) {
  //       this.setState ({ selectedDish : dish.id});
  //   }


	render () {
		const menu = this.state.dishes.map((dish) => {
			return (
				<div key={dish.id} className="col-12 col-md-5 m-1">
				   <Card> 
					 <Link to={`/menu/${dish.id}`}>
							<CardImg width="100%" src={dish.image} alt={dish.name} />
							<CardImgOverlay>
								<CardTitle>{dish.name}</CardTitle>
							</CardImgOverlay>
						</Link>
					</Card>
				</div>
				);
		});
		

		return (
			<div className="container">
					<div className="row">
								<Breadcrumb>
										<BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
										<BreadcrumbItem active>Menu</BreadcrumbItem>
								</Breadcrumb>
								<div className="col-12">
										<h3>Menu</h3>
										<hr />
								</div>                
						</div>
				<div className="row">
						{menu}
				</div>
				{/* <div className="row">
				  <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
				</div> */}
			</div>

		);
	}
}

		


export default Menu;