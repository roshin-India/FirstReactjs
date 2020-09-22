import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import userEvent from '@testing-library/user-event';
import {CardList} from './components/card-lists/card-list.component'
import { SerachBox } from './components/search-box/search-box.component';
class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters:[],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp)=>resp.json())
    .then((monsters)=>this.setState({monsters:monsters}))
  }
  render(){
    const {searchField,monsters} = this.state;
    const filterMonster = monsters.filter((monster)=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    console.log(filterMonster)
    return (
      <div className="App">
        <SerachBox 
        placeholder="Search monsters" 
        handleChange={e=>this.setState({searchField:e.target.value})} />
        <CardList monsters={filterMonster} />
      </div>
    );
  }
}

export default App;
