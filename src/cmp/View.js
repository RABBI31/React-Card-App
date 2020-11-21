import React, { Component } from 'react';
import axios from 'axios';
import RecordsList from './RecordsList';


 class View extends Component {
     constructor(props) {
         super(props);
         this.state = {students: []};
     }
     componentDidMount(){
         axios.get('http://localhost/ReactjsCrud/view.php')
         .then(response => {
             this.setState({ students: response.data });
         })
         .catch(function (error){
             console.log(error);
         })
     }
     userList(){
         return this.state.students.map(function(object, i){
             return <RecordsList obj = {object} key={i} />
            
         }); 
     }
     
    render() {
        
        return (
        
            <div>
               <h3 align="center"> Greetings List</h3>
               <table className = "table table-striped" style= {{marginTop: 20}}>
                   <thead>
                       <tr>
                           <th>Title</th>
                           <th>Greetings</th>
                           <th colSpan="2">Action</th>
                       </tr>
                   </thead>
                   <tbody>
                      { this.userList() }
                   </tbody>
               </table>
            </div>
        );
    }
}

export default View
