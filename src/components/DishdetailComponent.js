import React, {Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor (props) {
        super(props);
        this.state = { 
            dish : this.props.dish
        }

        console.log('DishDetail Component render is invoked');
    }

    renderComments(comments) {
        if (comments != null) {
            const commentStruct = comments.map(
                comment => {
                    return (  
                            <div key={comment.id.toString()}>   
                                    <div>{comment.body}</div>
                                    <div>-- { comment.author }, { comment.d.toString() }</div>
                                    <div>&nbsp;</div>
                            </div>
                     );
                }

            ) ;

            return (
                <div>{commentStruct}</div>
            );
            
         }
         else {
            return (
               <div></div>
            );
         }
    }

    render() {
        const dish = this.props.dish;
        if (dish != null) {
           return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                         <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <div>{ this.renderComments (dish.comments) }</div>
                    </div>
                </div>
              </div>
           );
        }
        else {
           return (
              <div></div>
           );
        }
     }
}


export default DishDetail;