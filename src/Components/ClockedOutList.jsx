import React from 'react'
import "../Style/ClockedInList.scss"
import EmployeeListItem from "./EmployeeListItem"

export default class ClockedOut extends React.Component {

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
                    <h2>Clocked Out</h2>
                    <ul>
                        <EmployeeListItem clockedIn = {false}/>
                        <EmployeeListItem clockedIn = {false}/>
                        <EmployeeListItem clockedIn = {false}/>
                        <EmployeeListItem clockedIn = {false}/>
                        <EmployeeListItem clockedIn = {false}/>
                    </ul>
                </div>
            </div>
        );
    }
}