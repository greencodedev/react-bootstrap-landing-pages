import React from "react";
import { Link } from 'react-router-dom'
import { FaSearch, FaChevronCircleRight } from "react-icons/fa";
import { Button, Tabs, Modal, Row, Col, Container, ListGroup, Tab, Nav } from 'react-bootstrap';
import Overview from './Overview';
import Series from './Series';
import Sermons from './Sermons';
import Logo from './../../assets/resource/logos/Sermonwise_horiz_G.svg';
import './bookview.scss';
export default class BookView extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      key: 'overview'
    }
  }
  render(){
    return (
      <section id="BookView" className="container-section">
        <Row className="land_header">
          <img src={Logo} className="logo" />
          <div className="nav_bar">
            <ul className="header-nav-bar">
              <li className="li-browse-by">
                <a className="browser-btn-header"><Link to="/home/browseby">BROWSE BY</Link></a>
              </li>
              <li className="gray-border">
                <a className="topic-btn-header"><Link to="/home/browsetopic">TOPIC</Link></a>
              </li>
              <li className="gray-border active">
                <a className="book-btn-header"><Link to="/home/bookview">BOOK</Link></a>
              </li>
              <li className="gray-border">
                <div className="top-search">
                  <div className="search-icon">
                    <FaSearch width="25" height="25"/>
                  </div>
                  <input type="text" placeholder="Search" className="input-search-box"/>
                </div>                
              </li>
            </ul>
          </div>
        </Row>
        <div className="title-header mt-7">
          <div className="title-page">
            <h1 className="font-32 font-light center-text letter-space-4">BROWSE BY BOOK</h1>
          </div>
          <div className="selected-book-title mt-3">
            <div className="book-title align-item-center center-text">
              <h3 className="white-border white-background">2 TIMOTHY<FaChevronCircleRight style={{ marginLeft: 30, marginTop: -5 }} /></h3>
            </div>
          </div>
        </div>
        <div className="tab-btns mt-5 row">
          <Tab.Container defaultActiveKey="overview" activeKey={this.state.key} onSelect={key => this.setState({ key })}>
            <Row style={{ width: '100%' }}>
              <Col sm={12} style={{display: 'flex', justifyContent: 'center'}}>
                <Nav variant="pills" className="flex-row row" style={{display: 'flex', justifyContent: 'center'}}>
                  <Nav.Item xs={12}>
                    <Nav.Link eventKey="overview">
                      <div className="tab-btn gray-border">
                        <span>OVERVIEW</span>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item xs={12}>
                    <Nav.Link eventKey="series">
                      <div className="tab-btn gray-border">
                        <span>SERMON SERIES</span>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item xs={12}>
                    <Nav.Link eventKey="sermons">
                      <div className="tab-btn gray-border">
                        <span>SERMONS</span>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={12} className="mt-5 no-padding">
                <Tab.Content>
                  <Tab.Pane eventKey="overview">
                    <Overview />
                  </Tab.Pane>
                  <Tab.Pane eventKey="series">
                    <Series />
                  </Tab.Pane>
                  <Tab.Pane eventKey="sermons">
                    <Sermons />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </section>
    )
  }
}