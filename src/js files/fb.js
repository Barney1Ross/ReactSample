import { render } from "@testing-library/react";
import React, { Component } from "react";
import './Fb.css';

class Fb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks1: 0,
            clicks2: 0,
            show: true
        }
    };
    likes = () => {
        this.setState({ clicks1: this.state.clicks1 + 1 });
    }
    dislikes = () => {
        this.setState({ clicks2: this.state.clicks2 + 1 });
    }
    render() {
        return (
            <div>
                <div className="searchBox">
                    <input type="text" placeholder="Search" />
                </div>
                <div className='simple-card'>
                    <img src="./images/Dota2bg.jpg" alt="" />
                    {/* <img src ="./images/am.jpg" />
                    <img src ="./images/ulfsaar.jpg" />
                    <img src ="./images/ember.jpg" /> */}
                </div>
                <div className="Title">
                    <h2>
                        Defense of the ancients 2
                    </h2>
                </div>
                <div>
                    <button onClick={this.likes}>Like{this.state.show ? <h2>{this.state.clicks1}</h2> : ''}</button>
                    <button id="2" onClick={this.dislikes}>Dislike{this.state.show ? <h2>{this.state.clicks2}</h2> : ''}</button>
                </div>
            </div>

        );

    }


}
export default Fb;
