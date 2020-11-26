import React, {Component} from 'react';
import Data from "./components/Data";

class App extends Component {
    constructor() {
        super();
        this.state = {
            dataList: [{
                key: 1,
                listName: 'to do',
            }, {
                key: 2,
                listName: "doing",
            }, {
                key: 3,
                listName: "done",
            }],
            dataCards: [
                {
                    key: 1,
                    cardName: "final project",
                    keyList: 1
                }, {
                    key: 2,
                    cardName: "trello",
                    keyList: 2
                }, {
                    key: 3,
                    cardName: "node js",
                    keyList: 3
                }, {
                    key: 4,
                    cardName: "react app",
                    keyList: 3
                }, {
                    key: 5,
                    cardName: "final project",
                    keyList: 1
                },

            ]
        }
    }

    render() {
        return (
            <div>
                <Data/>
            </div>
        )
    }
}

export default App;