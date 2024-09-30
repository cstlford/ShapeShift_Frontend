import { useState, useEffect } from 'react';
import "./index.css";
import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom';

const GenerateMealPlan = () => {
    const location = useLocation();
    const history = location.state;
    const [output, setOutput] = useState(""); // Default to empty string
    const userInput = "someUserInput"; 
    const baseUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        // Fetch the meal plan when the component mounts
        const historyString = JSON.stringify(history);
        fetch(`${baseUrl}/json-meal-plan/${historyString}`)
            .then((response) => response.json())
            .then((data) => {
                // Assuming the API returns meaningful text in data, 
                // If data is an object, extract the relevant part
                const markdownContent = data.markdown || data.text || "No content available"; // Adjust based on your API response
                console.log(markdownContent); 
                setOutput(markdownContent); // Set the actual Markdown content
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setOutput("Failed to load meal plan."); // Handle error scenario
            });
    }, [userInput, baseUrl, history]); // Ensure useEffect runs on changes

    return (
        <div id='meal-output-container'>
            {/* Render Markdown content */}
            <ReactMarkdown>{output}</ReactMarkdown>
        </div>
    );
}

export default GenerateMealPlan;
