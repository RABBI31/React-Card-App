
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

export default class RecordsList extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
            redirect: false
        }
    }
    delete() {
        alert("greet is deleted")
        axios.get('http://localhost/ReactjsCrud/delete.php?id=' + this.props.obj.gid)
            .then(
                this.setState({ redirect : true})
            
                )
            .catch(err => console.log(err))
    }

    render() {
        const { redirect } = this.state;
        if(redirect){
            return <Redirect to ='/view'/>;
        }
        return (
            <tr>
                <td>
                    {this.props.obj.title}
                </td>
                <td>
                    {this.props.obj.greetings}
                </td>
                <td>
                <Link to ={"/edit/"+this.props.obj.gid} className="btn btn-primary">Edit</Link> 

                </td>
                <td>
                    <button  onClick={this.delete} className="btn btn-primary">Delete</button>
                </td>

            </tr>


        )
    }
}
