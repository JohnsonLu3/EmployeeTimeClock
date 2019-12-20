import React from 'react'
import "../Style/EmployeeListItem.scss"

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
                        <button>Edit</button>
                    </span>
                </span>
            </li>
        )
    }

    getButton(){
        if(this.props.clockedIn){
            return(
                <button>Clock In</button>
            )
        }else{
            return(
                <button>Clock Out</button>
            )
        }
    }
}