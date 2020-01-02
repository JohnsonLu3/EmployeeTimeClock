import React from 'react'
import "../Style/ToolBar.scss"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
export default class ToolBar extends React.Component {

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
            <div id="timeclock-toolbar">
                <div className="container">
                    <ul>
                        <li><button>Clock In</button></li>
                        <li><button>Clock Out</button></li>
                        <li><button>Edit</button></li>
                    </ul>
                </div>
            </div>
        );
    }
}