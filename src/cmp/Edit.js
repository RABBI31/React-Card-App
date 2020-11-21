import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router';

class Edit extends Component {

    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeGreetings = this.onChangeGreetings.bind(this)
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            greetings: '',
            redirect: false

        }
    }

componentDidMount() {
    axios.get('http://localhost/ReactjsCrud/getById.php?id='+this.props.match.params.id)
        .then(response => {
            this.setState({
                title: response.data.title,
                greetings: response.data.greetings
            });
        })
        .catch(function (error) {
            console.log(error);
        })

    }


    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    onChangeGreetings(e) {
        this.setState({
            greetings: e.target.value
        })
    }



    onSubmit(e) {
        e.preventDefault();
        alert("Greet is updated")
        

        const obj = {
            
            title: this.state.title,
            greetings: this.state.greetings

        };
        
        axios.post('http://localhost/ReactjsCrud/update.php?id=' + 
        this.props.match.params.id, obj)
            .then(res => console.log(res.data),
            this.setState({ redirect : true})
                
            );
    
    }


    render() {
        const { redirect } = this.state;
        if(redirect){
            return <Redirect to ='/view'/>;
        }
        
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Upadte Greetings Card</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type='text' className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle} />
                    </div>
                    <div className="form-group">
                        <label>Greetings</label>
                        <input type='text' className="form-control"
                            value={this.state.greetings}
                            onChange={this.onChangeGreetings} />
                    </div>
                    <div className="form-group">
                        <input type='submit' value="Update" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Edit
