import React, { Component } from 'react';

//Components
import Question from '../components/Question';

let data = require('../data/qaData.json');

class MainController extends Component {

    //  parseData(){
    //     console.log(data[0].question)
    //     return data.map(question => {
    //         return <li>{question.question}</li>
    //     });
    // }

    parseSingleQuestion(query) {
        let question = query.question
        let answersHash = {};
        answersHash["correct"] = query.correct
        query.incorrect.map((question, i) => {
            // debugger;
             answersHash[`incorrect-${i}`] = question
        });

        return this.parseSingleQuestionAndAnswers(question, answersHash)
    };

    parseAllQuestions() {
        return data.map(query => {
            // debugger;
            this.parseSingleQuestion(query)
        })
    };

    parseSingleQuestionAndAnswers(question, answersHash) {
        //debugger;
        console.log("answers hash", answersHash)
        return(
            <li>
                <div className="question">
                    <p>{question}</p>
                </div>

                <div> 
                     <input type="radio" value="correct" id="correct" name="question-answers"/>
                     <label for="question-answer">
                         {answersHash.correct}
                     </label>
                </div>

                <div> 
                     <input type="radio" value="incorrect-0" id="incorrect-0" name="question-answers"/>
                     <label for="question-answer">
                         {answersHash["incorrect-0"]}
                     </label>
                </div>

                <div> 
                     <input type="radio" value="incorrect-1" id="incorrect-1" name="question-answers"/>
                     <label for="question-answer">
                         {answersHash["incorrect-1"]}
                     </label>
                </div>

                <div> 
                     <input type="radio" value="incorrect-2" id="incorrect-2" name="question-answers"/>
                        <label for="question-answer">
                            {answersHash["incorrect-2"]}
                        </label>
                </div>
            </li> 
        );
        
    }

    render() {    

        const allQuestions = data.map(data =>
             this.parseSingleQuestion(data)
        );

        return(
            <div>
                <form>
                    <ul>{allQuestions}</ul>
                    <input type="submit" value="submit quiz" />
                </form>    
            </div>
        )
    }
}

export default MainController;