import React from 'react';
import UserInfo, {Avatar} from "./User"
const bio = "I am frontend developer."
const bio1 = "Being a frontend developer allows me to not only develop client-facing apps and websites but also develop optimized and cutting-edge UI."
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
            <UserInfo myintro={bio} myintronext={bio1}/>

            
        </>
        );
    }

    componentDidMount(){
        console.log("Parent didMount");
        // const timer = setInterval(() => {
        //     console.log("Timer started");
        // },1000);
    }

    componentDidUpdate() {
        console.log("Parent didUpdate");
    }

    componentWillUnmount() {
        // clearInterval(timer);
        console.log("Component Unmounted");
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