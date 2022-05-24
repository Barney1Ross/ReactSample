import React, { Component } from "react";
import './Form.css';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    ndleSubmit(event) {
        alert('Succefully submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Basic Form example</h2>
                <label>
                    <h2>UserName:</h2>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                {/* <label>
                    <h2>Password:</h2>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label> */}
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default Form;