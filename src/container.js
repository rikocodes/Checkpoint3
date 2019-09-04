import React from "react";
import List from "./list";
class Container extends React.Component{
    render(){
        return (
            <>
        <h1> {this.props.cont} </h1>
        <List lis='22222'/>
        </>

        )
    }
}



export default Container;