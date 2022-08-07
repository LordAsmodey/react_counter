import React from 'react';
import './App.scss';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    count: 0,
  };

  // Fix addOne and add100 methods so they can work together
  addOne = () => {
    this.setState((prevState) => (
      { count: prevState.count + 1 }
    ));
  };

  add100 = () => {
    this.setState((prevState) => (
      { count: prevState.count + 100 }
    ));
  };

  // DON'T change the code below
  increase = () => {
    const { count } = this.state;

    this.addOne();

    if (count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1 className="App__title title">
          {`Count: ${count}`}
        </h1>
        <button
          type="button"
          className="button is-info mr-3"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          type="button"
          className="button is-info mr-3"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          className="button is-info"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}