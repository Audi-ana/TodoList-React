import React,{Component} from 'react';
import './App.css';
import {TaskList} from './tasklist';
import {CompletedTaskList} from './completedList'


class App extends Component{

  constructor(){
    super()

    this.state ={
      task:'',
      tasklist: [],
      completedList: []
    }
  }

  tractTextChange = (event) => {

    let value = event.target.value

    this.setState({
      task: value
    })
  } 

  addToTaskList = () => {

    this.setState({
      tasklist: this.state.tasklist.concat(this.state.task)
    })
  }

  removeTask = (task) => {

    this.setState({
      tasklist: this.state.tasklist.filter((item) => item !== task),
      completedList: this.state.completedList.concat(task)
    })
  }

  
  render(){
    return(
      <div className="wholeBodyStyling">
      <img src="todo-list.jpg" alt="to do list banner"></img>
      
      <div className="inputStyling">
      <input onChange={this.tractTextChange}type="text" placeholder="Enter Task"></input>
      <button onClick={this.addToTaskList}>Add</button>
      </div>
      
      <div className="createColumns">
      <div className="leftHeading">
      <h2>Things I need to do</h2>
      <TaskList taskList={this.state.tasklist} removeTaskCallback={this.removeTask}></TaskList>
      </div>
      
      <div className="rightHeading">
      <h2>Finished</h2>
      <CompletedTaskList completedList={this.state.completedList} removeTaskCallback={this.removeTask}></CompletedTaskList>
      </div>
      </div>
      </div>
      

    )
  }
}

export default App;

