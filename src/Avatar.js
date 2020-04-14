import React, { Component } from "react";
import AvatarList from './AvatarList';
import './Avatar.css';
import 'tachyons';

class Avatar extends Component {

    constructor(){
        super();
        this.state = {
            portalName: "Welcome to Avatar World",
            subscribe: "Subscribe"

        }
    }

    changeName(){
        if(this.state.subscribe === 'Subscribe'){
            this.setState({
                portalName: "Subscribed to Avatar World",
                subscribe: "Unsubscribe"
            })
        }
        else{
            this.setState({
                portalName: "Welcome to Avatar World",
                subscribe: "Subscribe"
            })
        }
    }

    render(){

        const avatarArray = [
            {
                id:1,
                name: "Jim",
                role: "React Developer"
            },
            {
                id:2,
                name: "Jam",
                role: "React Developer"
            },
            {
                id:3,
                name: "Jelly",
                role: "React Developer"
            },
            {
                id:4,
                name: "Soup",
                role: "React Developer"
            }
        ]
    
        const avatarCards = avatarArray.map( (avatar, index) => {
            return (
                <AvatarList key={index} id={avatarArray[index].id} name={avatarArray[index].name} role={avatarArray[index].role} />
                )
        })

        return (
            
            <div className='maindiv'>
                <h1 className='tc'>{this.state.portalName}</h1>
                {avatarCards}
                <button onClick= { () => this.changeName ()}>{this.state.subscribe}</button>
            </div>
            )
    }
}

export default Avatar;