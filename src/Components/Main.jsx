import React from 'react';
import "../Style/Main.scss"

import Clock from './Clock'
import ToolBar from './ToolBar'
import ClockedInList from './ClockedInList'

function Main() {
    return (
        <main className="Main">
            <h1 className="sr">Home Screen</h1>
            <div id="mainBody" className="flex-column">
                <div className="flex-container">
                    <div>
                        <ToolBar />
                        <ClockedInList/>
                    </div>
                </div>
                <div className="flex-container"><Clock /></div>
            </div>
        </main>
    );
}

export default Main;
