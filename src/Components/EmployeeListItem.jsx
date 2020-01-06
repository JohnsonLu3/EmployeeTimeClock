import React from 'react'
import "../Style/EmployeeListItem.scss"
import ClockedInEditWindow from '../Windows/ClockInEditWindow'

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
            <li className="employeeListItem">
                <span>
                    <span>Employee Name</span>
                    <span className="buttonContainer">
                        {this.getButton()}
                        
                    </span>
                </span>
            </li>
        )
    }

    getButton(){
        if(this.props.clockedIn){
            return(
                <span>
                    <button>Clock In</button>
                    <button onClick={this.showClockedInEditWindow}>Edit</button>
                </span>
            )
        }else{
            return(
                <span>
                    <button>Clock Out</button>
                    <button>Edit</button>
                </span>
            )
        }
    }

    showClockedInEditWindow(){
        let window = new ClockedInEditWindow();
        window.createWindow();
    }
}