import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//Here we have imported our component from our users file
import App from './App.jsx'
//this is the function that displays what we return in our component inside this => <></> in our browser
createRoot(document.getElementById('root')).render(
  //App is my componet <App/> specifies what we are getting in my component. It displays what is placed inside <> </>
  <StrictMode>
    <App></App>
  </StrictMode>,
)
