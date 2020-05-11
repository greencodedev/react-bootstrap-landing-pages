import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Button, Accordion, Card } from 'react-bootstrap';
import './bookview.scss';
export default class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false,
        }
    }
  render() {
    return (
        <div>
            <div className="expand-btn">
                <Button onClick={() => this.setState({ isExpand: !this.state.isExpand })} className="font-14">
                    EXPAND ALL &nbsp;&nbsp;&nbsp;
                    { this.state.isExpand ? <FiMinus /> : <FiPlus /> }
                </Button>
            </div>
            <div className="accordions mt-3">
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="col-lg-4 col-md-4 col-sm-12 col-xs-12 left-text">
                                HISTORICAL <br/>BACKGROUND
                                { this.state.isExpand ? <FiMinus className="accordion-icon"/> : <FiPlus className="accordion-icon"/> }
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0" className="col-8">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1" className="col-lg-4 col-md-4 col-sm-12 col-xs-12 left-text">
                                WHAT'S THE BIG IDEA?
                                { this.state.isExpand ? <FiMinus className="accordion-icon"/> : <FiPlus className="accordion-icon"/> }
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2" className="col-lg-4 col-md-4 col-sm-12 col-xs-12 left-text">
                                KEY THEMES
                                { this.state.isExpand ? <FiMinus className="accordion-icon"/> : <FiPlus className="accordion-icon"/> }
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3" className="col-lg-4 col-md-4 col-sm-12 col-xs-12 left-text">
                                GRAPHICAL OVERVIEWS
                                { this.state.isExpand ? <FiMinus className="accordion-icon"/> : <FiPlus className="accordion-icon"/> }
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="4" className="col-lg-4 col-md-4 col-sm-12 col-xs-12 left-text">
                                WHY IS THE BOOK <br/>NEEDED TODAY?
                                { this.state.isExpand ? <FiMinus className="accordion-icon"/> : <FiPlus className="accordion-icon"/> }
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="5" className="col-lg-4 col-md-4 col-sm-12 col-xs-12 left-text">
                                HELPFUL RESOURCES
                                { this.state.isExpand ? <FiMinus className="accordion-icon"/> : <FiPlus className="accordion-icon"/> }
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
    )
  }
}