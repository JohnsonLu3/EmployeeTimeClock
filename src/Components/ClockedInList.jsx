import React from 'react'
import "../Style/ClockedInList.scss"
import EmployeeListItem from "./EmployeeListItem"

export default class ClockedInList extends React.Component {

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
            <div id="ClockedInList">
                <div className="container">
                    <h2>Clocked In</h2>
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