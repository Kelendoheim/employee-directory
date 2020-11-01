import React, { Component } from 'react';
import getEmployees from "../../utils/api"

class Search extends Component {

   
    


    render() {
        const employeeArray = []
        for(let i = 0; i < 10; i++) {
            
                getEmployees()
                  .then(res => employeeArray.push(res.data.results[0]))
                  .catch(err => console.log(err))
              
        }
        console.log(employeeArray)
        return (
            <div>
                <p>TESTETE</p>
            </div>
        );
    }
}

export default Search;