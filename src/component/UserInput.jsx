import { useState } from "react";
export default function UserInput({userInput,onChange}){
// commented code moved to App.js to lift teh state up

        // const[userInput,setUserInput]  = useState({
        //     initialInvestment:10000,
        //     annualInvestment: 1200,
        //     expectedReturn: 6,
        //     duration: 10

        // })

        // // inputIdentifier is a String which is passed denoting for which field the change is required
        // //[inputIdentifier] you can directly allocate or access value when using like this
        // function handleChange(inputIdentifier,newValue  ){
        //     setUserInput(prevUserInput => {
        //         return{
        //             ...prevUserInput,
        //         [inputIdentifier] : newValue
        //         }
        //     })

        
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                     <label>Initial investment</label>
                    {/*setting up the previous value using "value" then passing the inputIdentifier and the entered value as event  */}
                    <input type="number" required value={userInput.initialInvestment} 
                    onChange={(event) => onChange("initialInvestment",event.target.value)}/>
                </p>

                <p>
                    <label>Annual investment</label>
                    <input type="number" required value={userInput.annualInvestment} 
                    onChange={(event) => onChange("annualInvestment",event.target.value)}/>
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label>Expected return</label>
                    <input type="number" required value={userInput.expectedReturn} 
                    onChange={(event) => onChange("expectedReturn",event.target.value)}/>
                </p>

                <p>
                    <label>Duration</label>
                    <input type="number" required value={userInput.duration} 
                    onChange={(event) => onChange("duration",event.target.value)}/>
                </p>
            </div>
        </section>
    )
}