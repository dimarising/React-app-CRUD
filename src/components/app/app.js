import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: [
          {name: "Rick Sanchez", salary: 8000, increase: false, id: 1},
          {name: "Jhon Week", salary: 4600, increase: true, id: 2},
          {name: "Robert Polson", salary: 2200, increase: false, id: 3},
          {name: "Tomas Anderson", salary: 5300, increase: false, id: 4}
       ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id)

      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      
      // const newArr = [...before, ...after];

      return{
        data: data.filter(item => item.id !== id)
      }
    })

  }

  render() {
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
          data={this.state.data}
          onDelete={this.deleteItem}/>
          <EmployeesAddForm/>
      </div>
    );
  }

}

export default App;
