// import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list-component';
import SearchBox from './components/search-box/search-box-component';
import './App.css';
import React from 'react'
// import userEvent from '@testing-library/user-event';



export const App = () => {

  const [searchField, setSearchField] = useState(''); //(value, setValue)
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);


  // console.log('render');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( (response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField]);

  const OnSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className='app-title'> Monsters Rolodex</h1>

       <SearchBox 
       OnChangeHandler = {OnSearchChange} 
       placeholder='Search Monsters' 
       className='monster-search-box'/>
      
      <CardList monsters = {filteredMonsters}/>

    </div>
  );
};



// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monsters:[],
//       searchField: ''
//     };
//   }
  
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then( (response) => response.json())
//       .then((users) => this.setState(() => {
//         return {monsters: users};
//         }
//       )
//     );
//   }

//   OnSearchChange = (event) => {
//       const searchField = event.target.value.toLocaleLowerCase();
//       this.setState(() => {
//         return {searchField};
//       });
//     }
  

//   render() {

//     const {monsters, searchField} = this.state;
//     const {OnSearchChange} = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//       });

//     return <div className="App">
//       <h1 className='app-title'> Monsters Rolodex</h1>
//       <SearchBox OnChangeHandler = {OnSearchChange} placeholder='Search Monsters' className='monster-search-box'/>
//         {/* {filteredMonsters.map((monster) => {
//         return <div key={monster.id}>
//           <h1>{monster.name}</h1>
//           </div>;
//       })} */}
//       <CardList monsters = {filteredMonsters}/>
//     </div>;
//   }
  
// }

export default App;
