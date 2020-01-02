import React from 'react'
import "../Style/Menu/ClockedInMenu.scss"
import EmployeeListItem from "./Menu/EmployeeMenuItem"

export default class ClockInMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }
    componentWillUnmount() {
    }

    render() {
        return (
            <div id="ClockedInMenu">
                <div className="container">
                    <h2>Clocked In - Edit</h2>
                    <ul>
                        <EmployeeListItem clockedIn = {true}/>
                        <EmployeeListItem clockedIn = {true}/>
                        <EmployeeListItem clockedIn = {true}/>
                        <EmployeeListItem clockedIn = {true}/>
                        <EmployeeListItem clockedIn = {true}/>
                    </ul>
                </div>
            </div>
        );
    }
}