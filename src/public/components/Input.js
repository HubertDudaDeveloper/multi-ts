import React, { setState, Component, render, parentCallback } from "react";
import ReactDOM from "react-dom/client";

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '', 
        }
      }

    render() {
    const { value, onIncrement, onDecrement } = this.props;
    const onTrigger = (event) => {
        this.props.parentCallback(event.target.value);
        event.preventDefault();
      }
    return (
        <form className="col-5 todo-form">
        <input className="form-control" onBlur={(event) => {
            const value = event.target.value;
            this.setState({inputValue: value});
            onTrigger(event)
        }}/>
        {this.state.inputValue}
      </form>
    )
    }
}

export default Todo