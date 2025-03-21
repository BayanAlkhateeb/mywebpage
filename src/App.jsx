import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Main from './pages/Main'
import Nav from './components/Nav'
import Features from './pages/Features'
import Enterprise from './pages/Enterprise'
import Support from './pages/Support'
function App() {

  return (
    <>
      <Router>
        <Nav />

        <Routes>

          <Route index element={<Main />} />
          <Route path="Features" element={<Features />} />
          <Route path="Enterprise" element={<Enterprise />} />
          <Route path="Support" element={<Support />} />


        </Routes>
      </Router>


      <Main />
    </>
  )
}

export default App