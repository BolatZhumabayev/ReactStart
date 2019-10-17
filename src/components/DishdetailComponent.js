import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { addComment } from '../redux/ActionCreators';
import { Loading } from './LoadingComponent';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


function RenderDish  ({dish}) {
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

function RenderComments  ( {comments, addComment, dishId} ) {
    if (comments != null) {
        const commentStruct = comments.map(
            comment => {
                return (
                        <div key={comment.id.toString()}>   
                                <div>{comment.comment}</div><br/>
                                 <div>-- { comment.author }, { new Intl.DateTimeFormat('ru-Ru', { year: 'numeric', month: 'short', day: '2-digit'}).format(comment.d)} 
                                </div><br/>
                        </div>
                 );
            }
        ) ;

        return (
            <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <div>{commentStruct}</div>
                    <div>
                    <CommentForm dishId={dishId} addComment={addComment} />
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

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        console.log("Current state is: " + JSON.stringify(values));
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment)
    }

    render() {
        return(
            <div>
            <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit (values)}>
                            <Row className="form-group">
                                <Col md={12}>
                                <Label htmlFor="rating">Rating</Label>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Control.select 
                                    className="form-control"
                                    name="rating" md={12} model=".rating" id="rating">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-grour">
                                <Col md={12}>
                                <Label htmlFor="yourName">Your name</Label>
                                </Col>
                            </Row>
                            <Row className="form-grour">
                                <Col md={12}>
                                    <Control.text model=".yourName" id="yourName" name="yourName"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".yourName"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-grour">
                                <Col md={12}>
                                <Label htmlFor="comment">Comment</Label>
                                </Col>
                            </Row>
                            <Row className="form-grour">
                                <Col md={12}>
                                <Control.textarea rows="6" model=".comment" id="comment" name="comment"
                                className="form-control">
                                </Control.textarea>
                                </Col>
                            </Row>  
                                              
                            <Button type="submit" value="submit" color="primary">
                            Submit
                            </Button>
                        </LocalForm>
                </ModalBody>
                </Modal>
            </div>
        );
    }

}


const DishDetail = (props) => {    
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {
           return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments}  
                        addComment={props.addComment}
                        dishId={props.dish.id} 
                        />
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