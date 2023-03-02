import React from 'react'
import Imgupload from './Imgupload'
import Images from './Images'
import Updateimages from './Updateimages'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Imgupload/>}/>
          <Route path="/img" element={<Images/>}/>
          <Route path="/update/:id" element={<Updateimages/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App