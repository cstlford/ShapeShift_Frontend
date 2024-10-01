import { useState, useEffect } from 'react';
import "./index.css";
import ReactMarkdown from 'react-markdown';

const GenerateMealPlan = () => {
    const [output, setOutput] = useState(""); // Default to empty string
    const baseUrl = import.meta.env.VITE_API_URL; // get base url from .env
    const[loading, setLoading] = useState(true) // boolean to determine if loading should be displayed

    const LoadingMessage = () => { // Conditionally rendered loading message
        return(
            <>
                <div className='loading-flex-container'>
                    <div className='spinner'></div>
                    <div className='loading-message'>Loading...</div>
                </div>
             
            </>
           
        )
    }
    useEffect(() => { // makes sure the api call only happens once
        // Fetch the meal plan when the component mounts
        fetch(`${baseUrl}/meal_plan`)
            .then((response) => response.json())
            .then((data) => {
                console.log("API Response:", data); // Log the API response
                setOutput(data);
                setLoading(false); // payload has arrived loading is deactivated
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setOutput("Failed to load meal plan."); // Handle error scenario
                setLoading(false) // payload has arrived loading is deactivated
            });
    }, [baseUrl]); // No need for userInput as it's not used here

    return (

        <div className='output-flex-container'>
                 <div id='meal-output-container'>
                    {loading && <LoadingMessage/>}
                    <ReactMarkdown>{output}</ReactMarkdown>
                </div>
        </div>
   
    );
}

export default GenerateMealPlan;
