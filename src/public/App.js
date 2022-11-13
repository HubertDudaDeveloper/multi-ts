import React, { Component, useState } from 'react';
import '../style/style.css';
import Button from './components/Button';
import Todo from './components/Input';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  
  const [content, setContent] = useState([]);

  constructor(props) {
    super(props);
    this.state = [
      {
        content: 'Nowy Task',
        date: Date,
      },
      {
        content: 'oks',
        date: 2022,
      },
    ];
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;
    const results = [];
    this.state.forEach((item, index) => {
      results.push(
        <section className="d-flex col-12 justify-content-center mt-5 gap-5">
          <span className='col-5'>{item.content}</span>
          <Button />
        </section>,
      );
    })

    const addTask = (item) => {
      this.state.push(
        {
          content: item,
          data: '',
        },
      )
    }

    this.handleCallback = (childData) =>{
      addTask(childData)
    }

    return (
      <>
      <div className="App col-12">
        <h1>To Do App</h1>
        <section className="d-flex col-12 justify-content-center mt-5 gap-5">
          <Todo parentCallback = {this.handleCallback}/>
          <Button onClick={addTask(this.state.inputValue)}/>
        </section>
          {results}
      </div>
      </>
    );
  }
}

export default App;
