import React, { Component } from 'react';

//Components
import Question from '../components/Question';

let data = require('../data/qaData.json');

class MainController extends Component {

    constructor() {
        super();
        this.state = {
            score: 0
        };
    }

    handleQuizSubmit = (event) => {
        event.preventDefault();
        this.setState({
            score: 50
        })
    };

    handleCorrectAnswer = (value) => {
        this.setState({
            score: this.state.score + 10
        });
    };

    handleWrongAnswer = (value) => {
        this.setState({
            score: this.state.score - 10
        });
    };

    handleMultipleChoice = (event) => {
        let value = event.target.value;
        
        value === "correct" ? this.handleCorrectAnswer(value) : this.handleWrongAnswer(value);
    }

    parseSingleQuestion(query) {
        let question = query.question
        let answersHash = {};
        answersHash["correct"] = query.correct
        query.incorrect.map((question, i) => {
             answersHash[`incorrect-${i}`] = question
        });

        return this.parseSingleQuestionAndAnswers(question, answersHash)
    };

    parseAllQuestions() {
        return data.map(query => {
            this.parseSingleQuestion(query)
        })
    };

    parseSingleQuestionAndAnswers(question, answersHash) {
        console.log(this.state);
        return(
            <li>
                <div className="question">
                    <p>{question}</p>
                </div>

                <div className="multiple-choice" onClick={event => this.handleMultipleChoice(event)}>
                    <div> 
                        <input type="radio" value="correct" id="correct" name="question-answers" />
                        <label for="question-answer">
                            {answersHash["correct"]}
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
                </div>
            </li> 
        );
        
    };

    render() {    

        const allQuestions = data.map(data =>
             this.parseSingleQuestion(data)
        );

        return(
            <div>
                <form onSubmit={this.handleQuizSubmit}>
                    <ul>{allQuestions}</ul>
                    <input type="submit" value="submit quiz" />
                </form>    
            </div>
        )
    }
}

export default MainController;