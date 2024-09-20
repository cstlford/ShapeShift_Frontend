import { useState } from "react"
import './index.css';


const UserPreferencesForm = () => {
    const [userPreferences, setUserPreferences] = useState('');

    const handleChange = (e: any) => {
        setUserPreferences(e.target.value)
        
    }
    const handleClick = () => {
        console.log(userPreferences)
        setUserPreferences("")

    }
  return (
    <>
        <div className="flex-container">
        <div className="main-panel">
        <h1>Dietary Preferences</h1>
        <p> Please enter any dietary restrictions or preferences. Feel free to provide as much detail as you’d 
        like about the foods you enjoy, as well as any you dislike or need to avoid. The more specific you are, 
        the better we can tailor a custom diet plan that perfectly fits your needs.</p>
        <textarea  value={userPreferences} name="userPreferencesForm" id="UserPreferencesForm" onChange={handleChange}></textarea>
        <button onClick={handleClick} className="btn-submit">submit</button>

        </div>
      
        </div>
    
    </>
  
  )
}

export default UserPreferencesForm