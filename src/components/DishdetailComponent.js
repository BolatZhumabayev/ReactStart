import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(values) {
        console.log(values);
        this.toggleModal();
       

        alert("rating: " + values.rating + " your name: " + values.yourName
            + " Comment: " + values.comment);
        //event.preventDefault();
    }
 
    render() {
        const RenderDish = ({dish})  => {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        
        const RenderComments = ( {comments} ) => {
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
                    <div>
                            <h4>Comments</h4>
                            <div>{commentStruct}</div>
                            <div>
                            <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
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

        const dish = this.props.dish;
        const comments = this.props.comments;
        if (dish != null) {
           return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={comments} />
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleLogin (values)}>
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
                                <Control.textarea model=".comment" id="comment" name="comment"
                                className="form-control">
                                </Control.textarea>
                                </Col>
                            </Row>
                            <Row className="form-grour">
                                <Col md={{size:12}}>                    
                                    <Button type="submit" value="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                </ModalBody>
                </Modal>
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