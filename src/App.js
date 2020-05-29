import React from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import FilterBox from "./components/FilterBox"
import axios from "axios";
import "./components/style.css"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
            employees: []
        }
        this.sortEmployees = this.sortEmployees.bind(this)
    }

    getEmployees() {
        axios.get("https://randomuser.me/api/?results=50&nat=us")
            .then(res => {
                // console.log(res.data)
                this.setState({ employees: res.data.results });
                // console.log(this.state.employees)
            }).catch(err => console.log(err))
    }

    // Making sure you don't have functions triggered on the same event 
    // If we are editing the state it should be the parents responsibility 

    sortEmployees() {
        // console.log(this.state.employees.sort())
       
        const sortedEmployees = this.state.employees.sort((a, b) => a.name.first.localeCompare(b.name.first))

        this.setState({
            employees: sortedEmployees
        })
    }

    // you can transfer functions into other components, see hello function for example
    helloFromApp(){
        console.log("hello function")
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state.search

        const filteredEmployees = this.state.employees.filter(employee => {
            if (employee.name.first.includes(data)) {
                // if the specific instance is true then return true which means add it to the new array 
                return true
            }
        })
        this.setState({
            employees: filteredEmployees
        })
    }

    handleInputChange = (event) => {
        event.preventDefault()

        if (event.target.value === "") {
            this.getEmployees();
        }

        const data = this.state.search

        const someVariable = this.state.employees.filter(employee => {
            if (employee.name.first.includes(data)) {
                // if the specific instance is true then return true which means add it to the new array 
                return true
            }
        })

        this.setState({
            [event.target.name]: event.target.value,
            employees: someVariable
        })
    }

    componentDidMount() {
        this.getEmployees();
    }

    render() {

        return (
            <div>
                <div className="container-fluid headerStyle">
                    <Header />
                </div>
                <br></br>
                <br></br>
                <div className="container">
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" name="search" onChange={this.handleInputChange}>
                                </input>
                            </div>
                            <button className="btn btn-outline-secondary" type="submit"
                                id="button-addon2"><i className="fas fa-user-circle"></i>
                            </button>
                        </form>
                    </div>
                    <br></br>
                    {this.state.employees.length > 0 ? <Table employees={this.state.employees} search={this.state.search} handleClick={this.sortEmployees} hello={this.helloFromApp}/> : <h1> Loading...</h1>}
                </div>
            </div>
        )
    }

}


export default App;