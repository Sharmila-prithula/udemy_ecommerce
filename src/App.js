import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/product/:id" element={<ProductScreen />} />
            <Route exact path="/cart/" element={<CartScreen />} />
            <Route exact path="/cart/:id" element={<CartScreen />} />
            <Route exact path="/login/" element={<LoginScreen />} />
            <Route exact path="/register/" element={<RegisterScreen />} />
            <Route exact path="/profile/" element={<ProfileScreen />} />
            <Route exact path="/login/shipping/" element={<ShippingScreen />} />
            <Route exact path="/payment" element={<PaymentScreen />} />
            <Route exact path="/placeorder" element={<PlaceOrderScreen />} />
            <Route exact path="/order/:id" element={<OrderScreen />} />

            <Route exact path="/admin/userlist" element={<UserListScreen/>} />
            <Route exact path="/admin/user/:id/edit" element={<UserEditScreen/>} />

            <Route exact path="/admin/productlist" element={<ProductListScreen/>} />
            <Route exact path="/admin/product/:id/edit" element={<ProductEditScreen/>} />

            <Route exact path="/admin/orderlist" element={<OrderListScreen/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
