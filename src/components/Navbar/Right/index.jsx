import React, { Component } from "react"
import Login from '../../Login'

class Right extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxLogin: false
        }

        this.openLogin = this.openLogin.bind(this)
    } 

    openLogin() {
        this.setState({boxLogin: true})
    }

    render() {
        return (
            <div className="navbarRight">
                {this.state.boxLogin && <Login status={this.state.boxLogin}/>}
                <button onClick={this.openLogin}>Entrar</button>
            </div>
        )
    }
}

export default Right