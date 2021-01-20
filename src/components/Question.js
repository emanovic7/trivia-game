import React, { Component } from 'react';
import Answer from './Answer';

let data = require('../data/qaData.json');

class Question extends Component {

    render() {
        function parseQuestions() {
            // let hash = {};
            // data.forEach(data => {
            //     for(let i=0; i<data.incorrect.length; i++){
            //         debugger;
            //         if(hash[data.incorrect[i]] === undefined) {
            //             hash["incorrect"] = data.incorrect[i];
            //         }
            //     }
            // })

             return data.map(data => {
               return (<li>{data.question}</li>,
                <Answer correct={data.correct} incorrect={data.incorrect} />
               )
            })
        }
        
        console.log("Props in questions", data);
        return(
            <div>
                <ol>{parseQuestions()}</ol>
            </div>
        );
    }
}

export default Question