import React from 'react'
import "../Style/ClockedInList.scss"
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
                        <li>sadasdasd</li>
                        <li>asdasdasd</li>
                        <li>sadasdasd</li>
                        <li>asdasdasd</li>
                    </ul>
                </div>
            </div>
        );
    }
}