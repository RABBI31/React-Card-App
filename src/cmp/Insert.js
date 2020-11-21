import React, { Component } from 'react';
import axios from 'axios';

 class Insert extends Component {
     constructor(props) {
         super(props);
         this.onChangeTitle = this.onChangeTitle.bind(this);
         this.onChangeGreetings = this.onChangeGreetings.bind(this)
         this.onSubmit = this.onSubmit.bind(this);
     
         this.state = {
             title: '',
             greetings: ''
              
         }
     }
         onChangeTitle(e) {
             this.setState({
                 title:e.target.value
             });
         }
         onChangeGreetings(e){
             this.setState({
                 greetings: e.target.value
             })
         }
     
        onSubmit(e){
            e.preventDefault();
            alert("Greet is Created");

            const obj = {
                title: this.state.title ,
                greetings: this.state.greetings
            };

            axios.post('http://localhost/ReactjsCrud/insert.php',obj)
            .then(res => console.log(res.data));
            //.catch(e => console.log(e.message));
            
            

            // console.log(obj)
            this.setState({
                title:'',
                greetings:''
            })
            
        }


    render() {
        return (
            <div style={{marginTop:10}}>
               <h3>Greetings Card</h3>
               <form onSubmit={this.onSubmit}>
                   <div className ="form-group">
                       <label>Title</label>
                       <input type='text' className="form-control"
                       value={this.state.title}
                       onChange={this.onChangeTitle}/>
                   </div>
                   <div className ="form-group">
                       <label>Greetings</label>
                       <input type='text' className="form-control"
                       value={this.state.greetings}
                       onChange={this.onChangeGreetings}/>
                   </div>
                   <div className ="form-group">
                       <input  type='submit' value = "Submit" className="btn btn-primary"/>
                   </div>
               </form>
            </div>
        )
    }
}

export default Insert
