import React from "react"

class Hello extends React.Component{

    componentDidMount(){
    
        setTimeout(()=>{alert("Hello World")}, 2000);
     
     }
     componentWillUnmount(){
        alert("Goodbye !")
     }
     render(){
        return(
            <div>
            
            </div>
        )
     }
   
    
}
export default Hello