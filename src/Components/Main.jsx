import React from 'react';
import "../Style/Main.scss"

import Clock from './Clock'
import ToolBar from './ToolBar'
import ClockedInList from './ClockedInList'
import ClockedOutList from './ClockedOutList'
import Calendar from 'react-calendar';
import TestData from '../Test/createTestData'

class Main extends React.Component {
    
    state = {
        date: new Date(),
      }
     
    onChange = date => this.setState({ date })

    render(){
        return (
            <main className="Main">
                {this.testData()}
                <h1 className="sr">Home Screen</h1>
                <div id="mainBody" className="flex-column">
                    <div className="flex-container">
                        <div>
                            <ToolBar />
                            <ClockedInList />
                            <ClockedOutList />
                        </div>
                    </div>
                    <div className="flex-container">
                        <Clock />
                        <div id="calendarMain">
                            <Calendar
                                onChange={this.onChange}
                                value={this.state.date}
                            /> 
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    testData(){
        TestData();
    }
}

export default Main;
