import React from 'react';

export class Avatar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userProfile : {
                name : '',
                id : '',
                avatar_url : '',
            },
        }

        console.log("Child 1 constructor");
    }
    
    render () {
        return (
            <>
            <img src={this.state.userProfile.avatar_url} alt="my-avatar" />
            <h2>Username : {this.state.userProfile.name}</h2>
            <h2>Userid : {this.state.userProfile.id}</h2>
            {console.log("Child 1 Render")}
            </>
        );
    }

    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/ZahidMdHussain');
        const json = await data.json();
        // console.log(json); 
        this.setState({
            userProfile: json,
    })
        console.log("Child 1 didMount");
    }

    componentDidUpdate(){
        console.log("Child 1 didUpdate");
    }

}

class UserInfo extends React.Component {
    constructor(props){
        super(props);
        console.log("Child 2 Constructor");
    }
    
    render () {
        return (
            <>
                <h3>My Bio :</h3>
                <p>{this.props.myintro}</p>
                <p>{this.props.myintronext}</p>
                <a href='https://github.com/ZahidMdHussain' target={"_blanck"}>GitHub</a>
                {console.log("Child 2 Render")}
            </>
        )
    }

    componentDidMount(){
        console.log("Child 2 didMount");
    }

    componentDidUpdate(){
        console.log("Child 2 didUpdate")
    }
}

export default UserInfo;