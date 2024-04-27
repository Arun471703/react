import { useState } from "react";
import Header from "./component/Header"
import UserInput from "./component/UserInput"
import Results from "./component/Results"

export default function App() {
  const[userInput,setUserInput]  = useState({
    initialInvestment:10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10

})
const inputIsValid =  userInput.duration >=1;

// inputIdentifier is a String which is passed denoting for which field the change is required
//[inputIdentifier] you can directly allocate or access value when using like this
function handleChange(inputIdentifier,newValue  ){
    setUserInput(prevUserInput => {
        return{
            ...prevUserInput,
            //by default newValue is passed as a String
            //+ symbol is added  in ordre to convert the new value into a number for calculation
            
        [inputIdentifier] : +newValue
        }
    })}

  return (
    <>
   <Header/>
   <UserInput  userInput={userInput} onChange={handleChange}/>
   {!inputIsValid && <p className="center"> Duration must be greater than or equal to 1 </p>}
   {inputIsValid && <Results input={userInput}/>}
   </>
  )
}