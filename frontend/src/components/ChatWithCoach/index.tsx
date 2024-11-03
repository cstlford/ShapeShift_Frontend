
import {useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"
// import.meta.env.VITE_YOUR_ENV_VARIABLE


const ChatWithCoach = () => {
    
  
    const navigate = useNavigate() //navigate to page via react-router-dom "virtual dom"
    
    const[output, setOutput] = useState<string | null>(null)  // set the LLM output state

    const[userInput, setUserInput] = useState("") // set the userInput state

    

    const[show, setShow] = useState(false) // Show LLM output
    
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {  // Add type to event parameter
      setUserInput(e.target.value)
    }
    const handleMealClick = () => { // navigates to generate sample meal plan when users clicks the button
      navigate("/generate-meal-plan")
    }

   
    
  

      const handleClick = async () => {
   
        try {
          const response = await fetch("http://127.0.0.1:5000/chat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({"message": userInput}),
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
    
          const ai_response = await response.json();
          setOutput(ai_response.message)
          setShow(true)
          setUserInput(""); 
          
    
       
        } catch (error) {
          console.error("Error fetching meal plan:", error);
          
        }
      
      };
    
    const handleGoBack = () => {
      navigate("/dashboard")

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