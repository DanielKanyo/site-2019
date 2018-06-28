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
      },
      tabValue: 1
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.changeTabValue = this.changeTabValue.bind(this);
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
          color: '#5f5f5f',
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

  changeTabValue(tabValue) {
    this.setState({ tabValue: tabValue });
  }

  render() {
    return (
      <div className="App">
        <Header
          handleToggleDrawer={this.toggleDrawer.bind(this)}
          headerStyleProp={this.state.headerStyle}
          handleChangeTabValueProp={this.changeTabValue.bind(this)}
        />
        <Content 
          tabValueProp={this.state.tabValue} 
          handleChangeTabValueProp={this.changeTabValue.bind(this)} 
        />
        <Menu 
          onRef={ref => (this.child = ref)} 
          handleChangeTabValueProp={this.changeTabValue.bind(this)} 
        />
      </div>
    );
  }
}

export default App;
