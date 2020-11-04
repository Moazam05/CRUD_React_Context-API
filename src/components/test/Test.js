import React, { Component } from 'react';

class Test extends Component {
  state = {
    id: '',
    title: '',
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          id: data.id,
          title: data.title,
        })
      );
  }

  // componentWillMount() {
  //   console.log('componentWillMount');
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceiveProps');
  // }

  // getSnapshotBeforeUpdate() {
  //   console.log('getSnapshotBeforeUpdate');
  // }

  render() {
    const { title, id } = this.state;
    return (
      <>
        <p>{id}</p>
        <h1>{title}</h1>
      </>
    );
  }
}

export default Test;
