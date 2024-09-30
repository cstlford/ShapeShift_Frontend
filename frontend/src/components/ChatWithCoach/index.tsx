
import {useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"
import.meta.env.VITE_YOUR_ENV_VARIABLE


const ChatWithCoach = () => {
    
  
    const navigate = useNavigate() //navigate to page via react-router-dom "virtual dom"
    
    const[output, setOutput] = useState("") // set the LLM output state

    const[userInput, setUserInput] = useState("") // set the userInput state

    

    const[show, setShow] = useState(false) // Show LLM output
    
    const handleChange = (e) => { // set user input
      setUserInput(e.target.value)
    
    }
    const handleMealClick = () => {
      navigate("/generate-meal-plan", {state:{ history }})
    }

   
    
    const handleClick = () => { // Send use input to Api to generate output and set output state

      
      const baseUrl = import.meta.env.VITE_API_URL;


      fetch(`${baseUrl}/basic_chat/${userInput}`)
        .then((response) => response.json())
        .then((data) => {
        
        setOutput(data); // Update the state with the API output
        setShow(true)
        })
        .catch((error) => {
        console.error('Error fetching data:', error);
        });

    setUserInput(""); // Clear the input after the button is clicked

    }
    const handleGoBack = () => {
      navigate("/")

    }
    const SendMessage = () => { // Render LLM output
     

      return ( 
              <>
                  <p className="gemini-output">{output}</p> 
              </>
      )
    }
  return (
    <>
        <button onClick={handleMealClick} id="btn-meal-plan">Generate Meal Plan</button>
        <h1 className="main-title">Chat with Nutrition Coach Hercules</h1>
        <button className='btn-go-back' onClick={handleGoBack}>Go Back</button>
        <div className="main-flex-container">
                {show && <SendMessage />}
                <textarea className={"user-input"} onChange={handleChange} value={userInput}></textarea>
                <button onClick={handleClick}>Submit</button> 
        </div>
 
    </>

  )
}

export default ChatWithCoach