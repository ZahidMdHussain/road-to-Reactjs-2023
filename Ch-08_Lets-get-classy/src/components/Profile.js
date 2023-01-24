import React from 'react';
import UserInfo, {Avatar} from "./User"

class Profile extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor");
    }
    
    render (){
    return (
        <>
            {console.log("Parent render")}
            <h1>This is my Github profile...</h1>
            <Avatar />
            <UserInfo myintro= "I am React frontend developer."/>

            
        </>
        );
    }

    componentDidMount(){
        console.log("Parent didMount");
    }

    componentDidUpdate() {
        console.log("Parent didUpdate");
    }

    

}

export default Profile


/***
 * parent constructor
 * parent render
 * child 1 constructor
 * child 1 render
 * child 2 constructor
 * child 2 render
 * child 2 didMount
 * parent didmount
 * child 1 didmount
 * child 1 render
 * child 1 update
 
 *
 * 
 */