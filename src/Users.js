import React, { Component } from 'react'
import axios from 'axios'

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this._loadInitialState();
    }

    async _loadInitialState() {
        axios.get('http://localhost:8000/userList')
            .then((response) => {
                this.setState({ data: response.data.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    _renderList(a) {
        return (<tr key={a._id}>
                    <td>{a.username}</td>
                    <td>{a.mail}</td>
                </tr>
                )
    }

    render() {
        return (
            <div>
                  <table className="tab" border="1px">
                    <tbody>
                        {(this.state.data) ? this.state.data.map((a) => {
                            return this._renderList(a)
                        }) : null}
                        </tbody>
                    </table>
            </div>
        );
    }

}

export default Users