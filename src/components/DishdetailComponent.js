import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish( {dish} ) {
        return (
            <div className="col-12 col-md-5 m-1">
                    <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    
    function RenderComments( {comments} ) {
        if (comments != null) {
            const commentStruct = comments.map(
                comment => {
                    return (
                            <div key={comment.id.toString()}>   
                                    <div>{comment.body}</div>
                                    <div>-- { comment.author }, { new Intl.DateTimeFormat('ru-Ru', { year: 'numeric', month: 'short', day: '2-digit'}).format(comment.d)} 
                                    </div>
                                    <div>&nbsp;</div>
                            </div>
                     );
                }
            ) ;

            return (
                <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <div>{commentStruct}</div>
                </div>
            );
            
         }
         else {
            return (
               <div></div>
            );
         }
    }

    const DishDetail = (props) =>  {
        const dish = props.dish;
        if (dish != null) {
           return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />
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
     
export default DishDetail;