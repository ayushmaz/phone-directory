import React, { Component, Fragment } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import Header from './Header';

class EditSuscriber extends Component {

    state = {
        name : '',
        phone : ''
    }

    componentDidMount(){
        const {name , phone} = this.props.editID
        this.setState({
            name : name,
            phone : phone
        })
    }

    inputChangedHandler = e => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    updateSubscriberList = e => {
        console.log('running')
        e.preventDefault();
        const {name , phone} = this.state
        this.props.updateSubscriberList(this.props.editID.id,name,phone)
        this.props.history.push('/phone-directory')
    }

    render() {
        if(this.props.editID === ''){
            return <Redirect to='/phone-directory'/>
        }
        return (
            <Fragment>
                <Header header="Edit Subscriber" />

                <Container style = {{marginTop:"20px"}}>
                    <Link to="/phone-directory"><Button variant="secondary">BACK</Button></Link>
                    <Form onSubmit={this.updateSubscriberList} style={{marginTop:"20px"}} >
                        <Form.Group controlId="editFormName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" onChange={this.inputChangedHandler} value={this.state.name} style={{width:"30%"}} />
                        </Form.Group>

                        <Form.Group className="auto" controlId="editFormNumber">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control name="phone" onChange={this.inputChangedHandler} value={this.state.phone} style={{width:"30%"}} type="phone" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </Fragment>
        );
    }
}

export default EditSuscriber;