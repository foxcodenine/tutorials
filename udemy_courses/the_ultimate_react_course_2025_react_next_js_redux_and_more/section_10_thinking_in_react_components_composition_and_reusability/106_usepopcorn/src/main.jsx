import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'

import StarRating from './StarRating'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < StarRating maxRating={5} size={24} color='red' className="" messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amzaing']} defaultRating={3} />
  </StrictMode>,
)
