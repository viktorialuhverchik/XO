import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Button, Input, Container, Row, Col } from 'reactstrap';
import './main.css';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            game: "",
            redirect: null
        };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            game: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem('game', this.state.game);
        this.setState({redirect: '/game'});
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return(
            <Container>
                <div>
                    <h1>Welcome to Tic-Tac-Toe!</h1>
                </div>
                <Row>
                    <Col>
                        <Form 
                        className='form-new-game'
                        onSubmit={this.handleSubmit}>

                            <Input
                            className='form-input'
                            type="text"
                            placeholder="Game"
                            value={this.state.game}
                            onChange={this.handleChange}
                            required
                            />

                            <Button
                            className='form-btn-start'
                            type="submit" 
                            color="primary">
                            Start new game</Button>
                    
                        </Form>
                    </Col>
                    
                    <Col>
                        <Form className="form-join-game">
                            <Button
                            className='form-btn-join'
                            type="submit" 
                            outline color="primary">
                            Join the game</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}
