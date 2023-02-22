import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        //create state inside the constructor
        this.state = {
            userInfo : {
                name : "Rekha",
                location : "kakri",
            }
        }
        console.log("child - constructor" + this.props.name);
    }
    async componentDidMount(){
        //best place for //API CALL
        const data = await fetch("https://api.github.com/users/RekhaKushwaha");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json,
        });
        console.log(" child - componentDidMount" + this.props.name);
        this.timer = setInterval(()=>{
            console.log("interval set");
        },1000);
    }
    
    //after first render componentDidUpdate will call after every render
    componentDidUpdate(prevProps, prevState){
        if(this.state.count !== prevState.count){
            //update count logic
        }
        console.log("child - componentDidUpdate");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("child - componentWillUnmount");
    }
    //most imp. method in class based component (mandatory method render())
     render(){
        console.log(" child - render" + this.props.name);
        //render() method return some jsx from it
        return(
            <div>
                 <h1>Profile class based component</h1>
                 <img src={this.state?.userInfo?.avatar_url}/>
                 <h2>Name : {this.state?.userInfo?.name}</h2>
                 <h3>Count: {this.state?.userInfo?.location}</h3>
            </div>
           
        )

}
}

export default Profile;