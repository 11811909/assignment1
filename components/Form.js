import React, { Component } from 'react'
class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            username: '',
            message: 'Welcome, '
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.message}${this.state.username}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <lable>username : </lable>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
                <button type="submit">submit</button>
            </form>
        )
    }
}

export default Form