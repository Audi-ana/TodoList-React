import React,{Component} from 'react';
import './tasklist.css'

export class TaskList extends Component{

    removeTask = (task) =>{
        this.props.removeTaskCallback(task)

    }

    render(){

        let taskList = this.props.taskList

        let taskItems = taskList.map((task, index)=>{
            return(
                <div>
                <li key={index}>{task}
                    <button onClick={() => this.removeTask(task)}> Completed</button>
                </li>
                </div>
            )
        })
        return(
            <ul className="listStyling">{taskItems}</ul>
        )
    }
}