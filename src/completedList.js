import React, {Component} from 'react';

export class CompletedTaskList extends Component{

    
    render(){
     
        let completedList = this.props.completedList

        let compList = completedList.map((task, index)=>{
            return(
                <div>
                    <li key={index}>{task}
                    </li>
                </div>
            )
        })

        return(
            <ul>{compList}</ul>
        )
    }
}
