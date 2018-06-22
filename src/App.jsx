import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headerStyle: {
        color: 'white',
        class: 'transparent'
      }
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 230) {
      this.setState({
        headerStyle: {
          color: '#3a3a3a',
          class: 'light'
        }
      });
    } else {
      this.setState({
        headerStyle: {
          color: 'white',
          class: 'transparent'
        }
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header headerStyleProp={this.state.headerStyle} />
        <Content />
      </div>
    );
  }
}

export default App;
