import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Container>
          <Routes>
            <Route exact path="/" element={<HomeScreen/>} />
            <Route exact path="/product/:id" element={<ProductScreen/>} />
            <Route exact path="/cart/" element={<CartScreen/>} />
            <Route exact path="/cart/:id" element={<CartScreen/>} />
            <Route exact path="/login/" element={<LoginScreen/>} />
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
