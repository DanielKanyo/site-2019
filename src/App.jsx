import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Menu from './components/Menu';
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
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 180) {
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

  toggleDrawer(side, open) {
    this.child.toggleMenu(side, open) // do stuff
  }

  render() {
    return (
      <div className="App">
        <Header
          handleToggleDrawer={this.toggleDrawer.bind(this)}
          headerStyleProp={this.state.headerStyle}
        />
        <Content />
        <Menu onRef={ref => (this.child = ref)} />
      </div>
    );
  }
}

export default App;
