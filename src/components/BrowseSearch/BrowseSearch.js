import React from "react";
import { Link } from 'react-router-dom'
import { FaSearch, FaSlidersH } from "react-icons/fa";
import { IoIosSearch, IoMdClose, IoIosArrowDropdownCircle, IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { Row, Col, Button } from 'react-bootstrap';
import Logo from './../../assets/resource/logos/Sermonwise_horiz_G.svg';
import './browseSearch.scss';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

export default class BrowseSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content_type: "series",
      author: "Caleb",
      date: "1980",
      tags: "baptism",
      slide_value: 8
    }
  }
  enterPress(e) {
    if (e.key === 'Enter') {
      console.log('do validate');
    }
  }

  handleChangeReverse = (value) => {
    this.setState({
      reverseValue: value
    })
  }

  render() {
    return (
      <section id="BrowseTopic"  className="container-section">
        <Row className="land_header">
          <img src={Logo} className="logo" />
          <div className="nav_bar">
            <ul className="header-nav-bar">
              <li className="li-browse-by">
                <a className="browser-btn-header"><Link to="/home/browseby">BROWSE BY</Link></a>
              </li>
              <li className="gray-border active">
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
            <h1 className="font-32 font-light center-text letter-space-4">SEARCH</h1>
          </div>
        </div>
        <div className="search-tab">
          <div className="search-input white-border white-background mt-5 mb-6">
            <input type="text" placeholder="SEARCH KEYWORD..." className="input-search-box" onKeyPress={this.enterPress}/>
            <div className="search-icon">
              <IoIosSearch width="25" height="25"/>
            </div>
          </div>
        </div>
        <div className="search-result">
          <Row className="search-key">
            <Col md={{ size: 10, offset: 2 }} lg={{ size: 10, offset: 2 }} sm={12} xs={12} className="no-padding">
              <div className="result-keys">
                <h1>Results</h1>
                <div className="result-key red-background white-font">
                  <span>Series </span>
                  <IoMdClose />
                </div>
                <div className="result-key red-background white-font">
                  <span>Caleb Ingersli </span>
                  <IoMdClose />
                </div>
              </div>
            </Col>
          </Row>
          <Row className="result-list">
            <Col md={2} lg={2} sm={12} xs={12} className="no-padding result-filter">
              <div className="filter-title-set red-color">
                <FaSlidersH className="font-32"/>
                <h1 className="red-color filter-title">FILTERS</h1>
              </div>
              <div className="filter-items">
                <nav className="">
                  <div className="filter-items-title">
                    <p className="filter-cate">Content Type</p>
                  </div>
                  <div className="filter-list">
                    <ul>
                      <li>
                        <input id="series" type="checkbox" name="series-name" value="Series" class="checkbox-custom"
                        />
                        <label for="series" class="checkbox-custom-label">Series</label>
                      </li>
                      <li>
                        <input id="sermon" type="checkbox" name="series-name" value="Sermon" class="checkbox-custom"
                        />
                        <label for="sermon" class="checkbox-custom-label">Sermon</label>
                      </li>
                      <li>
                        <input id="topic" type="checkbox" name="series-name" value="Topic" class="checkbox-custom"
                        />
                        <label for="topic" class="checkbox-custom-label">Topic</label>
                      </li>
                      <li>
                        <input id="passage" type="checkbox" name="series-name" value="Passage" class="checkbox-custom"
                        />
                        <label for="passage" class="checkbox-custom-label">Passage</label>
                      </li>
                      <li>
                        <input id="graphic" type="checkbox" name="series-name" value="Graphic" class="checkbox-custom"
                        />
                        <label for="graphic" class="checkbox-custom-label">Graphic</label>
                      </li>
                    </ul>
                  </div>
                </nav>
                <nav className="">
                  <div className="filter-items-title">
                    <p className="filter-cate">Author<span className="red-color filter-see-all">(See all)</span></p>
                  </div>
                  <div className="filter-list">
                    <ul>
                      <li>
                        <input id="caleb" type="checkbox" name="series-name" value="Caleb Ingersoll" class="checkbox-custom"
                        />
                        <label for="caleb" class="checkbox-custom-label">Caleb Ingersoll</label>
                      </li>
                      <li>
                        <input id="steven" type="checkbox" name="series-name" value="Steven Cole" class="checkbox-custom"
                        />
                        <label for="steven" class="checkbox-custom-label">Steven Cole</label>
                      </li>
                      <li>
                        <input id="mark" type="checkbox" name="series-name" value="Mark Mitchell" class="checkbox-custom"
                        />
                        <label for="mark" class="checkbox-custom-label">Mark Mitchell</label>
                      </li>

                    </ul>
                  </div>
                </nav>
                <nav  className='slider-horizontal'>
                  <div className="filter-items-title">
                    <p className="filter-cate">Seried Length (Sermons)</p>
                  </div>
                  <Slider
                    min={0}
                    max={10}
                    value={this.state.slide_value}
                    orientation='horizontal'
                    onChange={this.handleChangeReverse}
                  />
                </nav>
                <nav className="">
                  <div className="filter-items-title">
                    <p className="filter-cate">Date</p>
                  </div>
                  <div className="filter-list">
                    <ul>
                      <li>
                        <input id="1980" type="checkbox" name="series-name" value="1980" class="checkbox-custom"
                        />
                        <label for="1980" class="checkbox-custom-label">1980`s</label>
                      </li>
                      <li>
                        <input id="1990" type="checkbox" name="series-name" value="1990" class="checkbox-custom"
                        />
                        <label for="1990" class="checkbox-custom-label">1990`s</label>
                      </li>
                      <li>
                        <input id="2000" type="checkbox" name="series-name" value="2000" class="checkbox-custom"
                        />
                        <label for="2000" class="checkbox-custom-label">2000`s</label>
                      </li>
                      <li>
                        <input id="2010" type="checkbox" name="series-name" value="2010" class="checkbox-custom"
                        />
                        <label for="2010" class="checkbox-custom-label">2010`s</label>
                      </li>
                    </ul>
                  </div>
                </nav>
                <nav className="">
                  <div className="filter-items-title">
                    <p className="filter-cate">Tags <span className="red-color filter-see-all">(See all)</span> </p>
                  </div>
                  <div className="filter-list">
                    <ul>
                      <li>
                        <input id="baptism" type="checkbox" name="series-name" value="Series" class="checkbox-custom"
                        />
                        <label for="baptism" class="checkbox-custom-label">Baptism</label>
                      </li>
                      <li>
                        <input id="christ" type="checkbox" name="series-name" value="Series" class="checkbox-custom"
                        />
                        <label for="christ" class="checkbox-custom-label">Christ</label>
                      </li>
                      <li>
                        <input id="church" type="checkbox" name="series-name" value="Series" class="checkbox-custom"
                        />
                        <label for="church" class="checkbox-custom-label">Church</label>
                      </li>
                      <li>
                        <input id="enangelism" type="checkbox" name="series-name" value="Series" class="checkbox-custom"
                        />
                        <label for="enangelism" class="checkbox-custom-label">Evangelism</label>
                      </li>
                      <li>
                        <input id="grace" type="checkbox" name="series-name" value="Series" class="checkbox-custom"
                        />
                        <label for="grace" class="checkbox-custom-label">Grace</label>
                      </li>
                    </ul>
                    <span className="filter-see-all">(See all)</span>
                  </div>
                </nav>
              </div>
            </Col>
            <Col md={10} lg={10} sm={12} xs={12} className="no-padding result-content">
              <div className="result-action">
                <div className="result-category red-background white-font active">
                  <span style={{ fontWeight: 500 }}>SERMON SERIES</span>
                </div>
                <div className="result-category gray-font">
                  <span style={{ fontWeight: 500 }}>SERMONS</span>
                </div>
              </div>
              <div className="">
                <div className="series-box">
                  <div className="sermon-series-title white-background white-border" style={{ justifyContent: 'flex-start' }}>
                    <div className="" style={{ display: 'flex', width: 'fit-content', textAlign: 'left' }}>
                      <div className="title-label" style={{ marginLeft: 35 }}>
                        <p className="font-22 ">"Entrusted with the Gospel"</p>
                        <span>Caleb Ingersoll (12 sermons)</span>
                      </div>
                      <div className="title-icon">
                        <IoIosArrowDropdownCircle className="font-30 dropdown-icon"/>
                      </div>
                    </div>
                  </div>
                  <div className="series-list" style={{ justifyContent: 'flex-start' }}>
                    <div className="">
                      <ul>
                        <li>1. <a>1:1-7 - The Making of a Man of God</a></li>
                        <li>2. <a>1:8-18 - Do Not Be Ashamed</a></li>
                        <li>3. <a>1:8-14 - Gospel Joy, Gospel Courage</a></li>
                        <li>4. <a>2:1-7 - Teacher, Soldier, Athlete, Farmer</a></li>
                        <li>5. <a>2:8-13 - A Worldview to Make Suffering Sufferable</a></li>
                        <li>6. <a>2:14-19 - Preventing Gangrene in the Church Body</a></li>
                        <li>7. <a>2:20-26 - The Kind of Person God Uses</a></li>
                        <li>8. <a>3:1-9 - The Marks of Empty Religion</a></li>
                        <li>9. <a>3:10-16 - The Sufficiency of Scripture [quest prescher]</a></li>
                        <li>10. <a>4:1-5 - The Priority of Preaching</a></li>
                        <li>11. <a>4:6-8 - Motivations for Finishing Well</a></li>
                        <li>12. <a>4:9-22 - Final Thoughts from the Finish Line</a></li>
                      </ul>
                      <div className="explore-btn" style={{ textAlign: 'left', marginLeft: 40 }}>
                        <Button className="font-14">EXPLORE SERIES</Button>
                      </div>
                    </div>
                  </div>
                  <div className="sermon-series-title white-background white-border" style={{ justifyContent: 'flex-start' }}>
                    <div className="" style={{ display: 'flex', width: 'fit-content', textAlign: 'left' }}>
                      <div className="title-label" style={{ marginLeft: 35 }}>
                        <p className="font-22 ">"A Life That Counts"</p>
                        <span>Mark Mitchell (15 sermons)</span>
                      </div>
                      <div className="title-icon">
                        <IoIosArrowDroprightCircle className="font-30 dropdown-icon"/>
                      </div>
                    </div>
                  </div>
                  <div className="sermon-series-title white-background white-border" style={{ justifyContent: 'flex-start' }}>
                    <div className="" style={{ display: 'flex', width: 'fit-content', textAlign: 'left' }}>
                      <div className="title-label" style={{ marginLeft: 35 }}>
                        <p className="font-22 ">"2 Timothy"</p>
                        <span>Steven Cole (21 sermons)</span>
                      </div>
                      <div className="title-icon">
                        <IoIosArrowDroprightCircle className="font-30 dropdown-icon"/>
                      </div>
                    </div>
                  </div>
                  <div className="search-pagination mb-6">
                    <div className="prev-btn">
                      <IoIosArrowDropleftCircle />
                    </div>
                    <div className="page-numbers">
                      <ul>
                        <li><a className="active" onClick={() => this.paginate(1)}>1</a></li>
                        <li><a onClick={() => this.paginate(2)}>2</a></li>
                        <li><a onClick={() => this.paginate(3)}>3</a></li>
                        <li><span>...</span></li>
                        <li><a onClick={() => this.paginate(8)}>8</a></li>
                      </ul>
                    </div>
                    <div className="next-btn">
                      <IoIosArrowDroprightCircle />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    )
  }
}