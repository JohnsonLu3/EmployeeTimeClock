import React from 'react'
import "../../Style/Menu/ClockedInMenu.scss"

export default class EmployeeListItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    render(){
        return(
            <li className="employeeMenuItem">
                <span>
                    <span className="employeeName">Employee Name</span>
                    <span><button>Edit</button></span>
                    <div className="Status">
                        <div>
                            <span>Clocked In: </span>
                            {this.getClockedInTime()}
                        </div>
                        {this.getClockedInTotal()}
                    </div>
                </span>
            </li>
        )
    }

    getClockedInTime(){
        return(
            <span className="clockedInTime"> 14:52:32</span>
  
        )
    }

    getClockedInTotal(){
        return(
            <span className="clockedInTotal"> HH:MM:SS:MS</span>
        )
    }
}