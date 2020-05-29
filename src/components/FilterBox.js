import React from "react"; 
import "./style.css"

class FilterBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search: null
        }
    }

    handleSubmit = (event)=> {
        event.preventDefault()
        const data = this.state
        console.log(data)
    }

    handleInputChange = (event) => {
        event.preventDefault()
        // console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render(){
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
            <input type="text" className="form-control" name="search" onChange= {this.handleInputChange}></input>
            </div>
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2"><i className="fas fa-user-circle"></i></button>
            </form>
        </div>
    ); 
    }
}

export default FilterBox; 