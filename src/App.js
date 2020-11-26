import React, {Component} from 'react';
import {
    CardDeck,
    CardBody,
    CardHeader,
    Card,
    Col,
    Button,
    CardFooter,
    CardText
} from "reactstrap";

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
                <CardDeck>
                    {this.state.dataList.map((list, index) => {
                        const cards = this.state.dataCards.filter(card => card.keyList === list.key);
                        return (
                            <div key={index}>
                                <Col sm="2.5">
                                    <Card>
                                        <CardHeader>
                                            {list.listName}
                                            <Button close/>
                                        </CardHeader>
                                        {
                                            cards.map((card, index) => {
                                                return (
                                                    <CardBody key={index}>
                                                        <div>
                                                            <CardText>
                                                                {card.cardName}
                                                                <Button close/>
                                                            </CardText>
                                                        </div>
                                                    </CardBody>
                                                )
                                            })
                                        }
                                        <CardFooter>
                                            <div className="row">
                                                <input/>
                                                <Button>Save</Button>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </div>
                        )
                    })}
                </CardDeck>
            </div>
        )
    }
}

export default App;