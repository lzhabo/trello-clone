import React, {Component} from 'react';
import firebase from "../firebase/index";
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

class Data extends Component {
    constructor() {
        super();
        this.state = {
            dataLists: [],
            dataCards: []
        }
    }

    componentDidMount() {
        const myList = firebase.database().ref('lists/');
        console.log(firebase);
        myList
            .on('value', (snapshot) => {
            const myListFromDatabase = snapshot.val()
            if (myListFromDatabase === null) {
                console.log("list from db is null ")
            } else {
                const lists = Object.keys(snapshot.val()).map(key => {
                    return {
                        key: key,
                        listName: myListFromDatabase[key].listName
                    }
                })
                this.setState({
                    dataLists: lists
                })

            }

        })
        const myCard = firebase.database().ref('cards/')
        myCard.on('value', (snapshot) => {
            const myCardFromDatabase = snapshot.val();
            if (myCardFromDatabase === null) {
                console.log("card at our firebase is null");
            } else {
                const cards = Object.keys(snapshot.val()).map(key => {
                    return {
                        key: key,
                        cardName: myCardFromDatabase[key].cardName
                    }
                })
                this.setState({
                    dataCards: cards
                })

            }
        })
    }

    _handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    _saveList = (e) => {
        if (this.state.listName === '') {
            alert("List can't be empty");
        } else {
            const newListKey = firebase.database().ref('lists/').push().key;
            firebase
                .database()
                .ref('/')
                .update({
                    [newListKey]: {
                        listName: this.state.listName
                    }
                })
            this.setState({
                listName: ""
            })
        }

    }
    _handleDeleteList = (key)=>{

        const {dataCards} = this.state;
        let countCardOnList=0;
        for (let i =0;i<dataCards.length;i++){
            if(key === dataCards[i].listKey){
                countCardOnList++;
            }
            if(countCardOnList>0){
                for(let i =0;i<dataCards.length;i++){
                    if(key ===dataCards[i].listKey){
                        this._handleDeleteCard(dataCards[i].key);
                    }
                }

            }
        }
        firebase
            .database()
            .ref(`lists/${key}`)
            .remove()
        console.log("list successfully deleted")
        const myListLength = this.state.dataLists.length;
        if(myListLength===1){
            this.setState({
                dataLists:[]
            })
        }
    }
    _handleDeleteCard = key =>{
        firebase
            .database
            .ref(`cards/${key}`)
            .remove();
    }
    render() {
        return (
            <div>
                <CardDeck>
                    {this.state.dataLists.map((list, index) => {
                        const cards = this.state.dataCards.filter(card => card.keyList === list.key);
                        return (
                            <div key={index}>
                                <Col sm="2.5">
                                    <Card>
                                        <CardHeader>
                                            {list.listName}
                                            <Button
                                                onClick={()=>{this._handleDeleteList(list.key)}}
                                                close/>
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
                                                <input placeholder="Add a list"/>
                                                <Button>Save</Button>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </div>
                        )
                    })}
                    <Col sm="2.5">
                        <Card>
                            <CardHeader>
                                <div className="row">
                                    <input type='text'
                                           name="listName"
                                           value={this.state.listName}
                                           onChange={this._handleChange}
                                           placeholder="Add a task"/>
                                    <Button onClick={() => this._saveList()}>Save</Button>
                                </div>
                            </CardHeader>
                        </Card>
                    </Col>
                </CardDeck>
            </div>
        )
    }
}

export default Data;