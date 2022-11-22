import React, { Component } from "react"
import { BiSearch } from 'react-icons/bi'

class Center extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }

        this.searchUpdate = this.searchUpdate.bind(this)
    }

    searchUpdate(e) {
        let value = e.target.value
        this.setState({search: value})
    }

    render() {
        return (
            <div className="navbarLeft">
                <div className="searchNavbar">
                    <label htmlFor="search">
                        <input type="text" name="search" id="search" value={this.state.search} onChange={this.searchUpdate}/>
                        <BiSearch />
                    </label>
                </div>
            </div>

    //     <div className="search-content">
    //       <div className="title">
    //         <h1>
    //           Pesquise por sua região para encontrar trabalhadores próximos
    //         </h1>
    //       </div>
    //       <label className="search-input" for="search">
    //         <input
    //           type="text"
    //           name="search"
    //           id="search"
    //           placeholder="Ex: São Paulo..."
    //         />
    //         <p>
    //           <BiSearch />
    //         </p>
    //       </label>
    //     </div>
    //         </div>
    //   </div>
        )
    }
}

export default Center