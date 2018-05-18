import React from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import certAnswers from '../../certAnswers.json'

class Certification extends React.Component {

    state = {
        certAnswers: certAnswers,
        selectedOption: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };

    checkAnswers = (event) => {
        var runningScore = 0;
        for (var i = 0; i < 10; i++) {
            if (this.state.selectedOption[i] === certAnswers[i]){
                runningScore++;
            }
        }
        console.log(runningScore);

        // ***Later send the score to the database along with their username/email address
    }

    handleOptionChange =  (param) => (changeEvent) => {
        var tempArray = [];
        tempArray = this.state.selectedOption;
        tempArray[param] = changeEvent.target.value;
        this.setState({
          selectedOption: tempArray
        });
        console.log("change event target: " + changeEvent.target.value)
      }

    render() {
        return (
            <div className="certification-page">
            <div className="container">
                <h1>Welcome to the Certification page!</h1>
                <h3>Interested in starting a PAN club at your school?</h3>
                <p>Our goal at PAN is to share accurate information about AIDS/HIV.  As part of the certification process you will be asked to read through our curriculum, and demonstrate your understanding by passing our certification test.  Once we receive your scores we will contact you to discuss our training process.</p>
                <br />
                <h3>Curriculum</h3>
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.avert.org/about-hiv-aids/what-hiv-aids">What are HIV and AIDS?</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.avert.org/hiv-transmission-prevention/how-you-get-hiv">How do you get HIV?</a></li>
                </ul>
                <br />
                <h3>Certification Test</h3>

                {/* Add new fields (first name, last name, email address) so we can keep this info with their score in the database */}
    
                <form>
                    <h3>
                        <strong>Question #1: </strong>
                        Write the text for question #1 here.
                        
                    </h3>
                    <fieldset>
                        <input type="radio" name="Question1" value="a" checked={this.state.selectedOption[0] === 'a'} onChange={this.handleOptionChange(0)}/>Write answers for question #1 here <br/>
                        <input type="radio" name="Question1" value="b" checked={this.state.selectedOption[0] === 'b'} onChange={this.handleOptionChange(0)}/>Write answers for question #1 here <br/>
                        <input type="radio" name="Question1" value="c" checked={this.state.selectedOption[0] === 'c'} onChange={this.handleOptionChange(0)}/>Write answers for question #1 here <br/>
                        <input type="radio" name="Question1" value="d" checked={this.state.selectedOption[0] === 'd'} onChange={this.handleOptionChange(0)}/>Write answers for question #1 here <br/>
                    </fieldset>
    
                    <h3>
                        <strong>Question #2: </strong>
                        Write the text for question #2 here.
                    </h3>
                    <fieldset>
                        <input type="radio" name="Question2" value="a" checked={this.state.selectedOption[1] === 'a'} onChange={this.handleOptionChange(1)}/>Write answers for question #2 here <br/>
                        <input type="radio" name="Question2" value="b" checked={this.state.selectedOption[1] === 'b'} onChange={this.handleOptionChange(1)}/>Write answers for question #2 here <br/>
                        <input type="radio" name="Question2" value="c" checked={this.state.selectedOption[1] === 'c'} onChange={this.handleOptionChange(1)}/>Write answers for question #2 here <br/>
                        <input type="radio" name="Question2" value="d" checked={this.state.selectedOption[1] === 'd'} onChange={this.handleOptionChange(1)}/>Write answers for question #2 here <br/>
                    </fieldset>
    
                    <h3>
                        <strong>Question #3: </strong>
                        Write the text for question #3 here.
                    </h3>
                    <fieldset>
                        <input type="radio" name="Question3" value="a" checked={this.state.selectedOption[2] === 'a'} onChange={this.handleOptionChange(2)}/>Write answers for question #3 here <br/>
                        <input type="radio" name="Question3" value="b" checked={this.state.selectedOption[2] === 'b'} onChange={this.handleOptionChange(2)}/>Write answers for question #3 here <br/>
                        <input type="radio" name="Question3" value="c" checked={this.state.selectedOption[2] === 'c'} onChange={this.handleOptionChange(2)}/>Write answers for question #3 here <br/>
                        <input type="radio" name="Question3" value="d" checked={this.state.selectedOption[2] === 'd'} onChange={this.handleOptionChange(2)}/>Write answers for question #3 here <br/>
                    </fieldset>
    
                    <h3>
                        <strong>Question #4: </strong>
                        Write the text for question #4 here.
                    </h3>
                    <fieldset>
                        <input type="radio" name="Question4" value="a" checked={this.state.selectedOption[3] === 'a'} onChange={this.handleOptionChange(3)}/>Write answers for question #4 here <br/>
                        <input type="radio" name="Question4" value="b" checked={this.state.selectedOption[3] === 'b'} onChange={this.handleOptionChange(3)}/>Write answers for question #4 here <br/>
                        <input type="radio" name="Question4" value="c" checked={this.state.selectedOption[3] === 'c'} onChange={this.handleOptionChange(3)}/>Write answers for question #4 here <br/>
                        <input type="radio" name="Question4" value="d" checked={this.state.selectedOption[3] === 'd'} onChange={this.handleOptionChange(3)}/>Write answers for question #4 here <br/>
                    </fieldset>
    
                    <h3>
                        <strong>Question #5: </strong>
                        Write the text for question #5 here.
                    </h3>
                    <fieldset>
                        <input type="radio" name="Question5" value="a" checked={this.state.selectedOption[4] === 'a'} onChange={this.handleOptionChange(4)}/>Write answers for question #5 here <br/>
                        <input type="radio" name="Question5" value="b" checked={this.state.selectedOption[4] === 'b'} onChange={this.handleOptionChange(4)}/>Write answers for question #5 here <br/>
                        <input type="radio" name="Question5" value="c" checked={this.state.selectedOption[4] === 'c'} onChange={this.handleOptionChange(4)}/>Write answers for question #5 here <br/>
                        <input type="radio" name="Question5" value="d" checked={this.state.selectedOption[4] === 'd'} onChange={this.handleOptionChange(4)}/>Write answers for question #5 here <br/>
                    </fieldset>
    
                    <h3>
                        <strong>Question #6: </strong>
                        Write the text for question #6 here.
                    </h3>
                    <fieldset>
                        <input type="radio" name="Question6" value="a" checked={this.state.selectedOption[5] === 'a'} onChange={this.handleOptionChange(5)}/>Write answers for question #6 here <br/>
                        <input type="radio" name="Question6" value="b" checked={this.state.selectedOption[5] === 'b'} onChange={this.handleOptionChange(5)}/>Write answers for question #6 here <br/>
                        <input type="radio" name="Question6" value="c" checked={this.state.selectedOption[5] === 'c'} onChange={this.handleOptionChange(5)}/>Write answers for question #6 here <br/>
                        <input type="radio" name="Question6" value="d" checked={this.state.selectedOption[5] === 'd'} onChange={this.handleOptionChange(5)}/>Write answers for question #6 here <br/>
                    </fieldset>
    
                    <h3>
                        <strong>Question #7: </strong>
                        Write the text for question #7 here.
                    </h3>
                    <fieldset>
                        <input type="radio" name="Question7" value="a" checked={this.state.selectedOption[6] === 'a'} onChange={this.handleOptionChange(6)}/>Write answers for question #7 here <br/>
                        <input type="radio" name="Question7" value="b" checked={this.state.selectedOption[6] === 'b'} onChange={this.handleOptionChange(6)}/>Write answers for question #7 here <br/>
                        <input type="radio" name="Question7" value="c" checked={this.state.selectedOption[6] === 'c'} onChange={this.handleOptionChange(6)}/>Write answers for question #7 here <br/>
                        <input type="radio" name="Question7" value="d" checked={this.state.selectedOption[6] === 'd'} onChange={this.handleOptionChange(6)}/>Write answers for question #7 here <br/>
                    </fieldset>
    
                    <h3>
                        <strong>Question #8: </strong>
                        Write the text for question #8 here.
                    </h3>
                    <fieldset>
                        <input type="radio" name="Question8" value="a" checked={this.state.selectedOption[7] === 'a'} onChange={this.handleOptionChange(7)}/>Write answers for question #8 here <br/>
                        <input type="radio" name="Question8" value="b" checked={this.state.selectedOption[7] === 'b'} onChange={this.handleOptionChange(7)}/>Write answers for question #8 here <br/>
                        <input type="radio" name="Question8" value="c" checked={this.state.selectedOption[7] === 'c'} onChange={this.handleOptionChange(7)}/>Write answers for question #8 here <br/>
                        <input type="radio" name="Question8" value="d" checked={this.state.selectedOption[7] === 'd'} onChange={this.handleOptionChange(7)}/>Write answers for question #8 here <br/>
                    </fieldset>
    
                    <h3>
                        <strong>Question #9: </strong>
                        Write the text for question #9 here.
                    </h3>
                    <fieldset>
                        <input type="radio" name="Question9" value="a" checked={this.state.selectedOption[8] === 'a'} onChange={this.handleOptionChange(8)}/>Write answers for question #9 here <br/>
                        <input type="radio" name="Question9" value="b" checked={this.state.selectedOption[8] === 'b'} onChange={this.handleOptionChange(8)}/>Write answers for question #9 here <br/>
                        <input type="radio" name="Question9" value="c" checked={this.state.selectedOption[8] === 'c'} onChange={this.handleOptionChange(8)}/>Write answers for question #9 here <br/>
                        <input type="radio" name="Question9" value="d" checked={this.state.selectedOption[8] === 'd'} onChange={this.handleOptionChange(8)}/>Write answers for question #9 here <br/>
                    </fieldset>
    
                    <h3>
                        <strong>Question #10: </strong>
                        Write the text for question #10 here.
                    </h3>
                    <fieldset>
                        <input type="radio" name="Question10" value="a" checked={this.state.selectedOption[9] === 'a'} onChange={this.handleOptionChange(9)}/>Write answers for question #10 here <br/>
                        <input type="radio" name="Question10" value="b" checked={this.state.selectedOption[9] === 'b'} onChange={this.handleOptionChange(9)}/>Write answers for question #10 here <br/>
                        <input type="radio" name="Question10" value="c" checked={this.state.selectedOption[9] === 'c'} onChange={this.handleOptionChange(9)}/>Write answers for question #10 here <br/>
                        <input type="radio" name="Question10" value="d" checked={this.state.selectedOption[9] === 'd'} onChange={this.handleOptionChange(9)}/>Write answers for question #10 here <br/>
                    </fieldset>
    
                    <br />
                    <br />
                    <button type="button" className="btn btn-primary" onClick={this.checkAnswers} id="Submit Button">Submit</button>
                </form>
    
            </div>
        </div>
        )
    }
}

// const Certification = () => (

// );

export default Certification;