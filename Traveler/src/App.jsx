import { Route, Routes } from 'react-router-dom'
import './App.css'
import ContactPage from './pages/Contact/ContactPage'
import PricingPage from './pages/Pricing/PricingPage'
import HomePage from './pages/Home/HomePage'
import AboutUsPage from './pages/AboutUs/AboutUsPage'
import MyNavbar from './components/MyNavbar'

import LoginPage from './pages/Authentication/LoginPage'
import SignUpPage from './pages/Authentication/SignUpPage'

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        {/* Authentication Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Pages Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </>
  )
}

export default App
