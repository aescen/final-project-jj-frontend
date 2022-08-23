import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/commons/ProtectedRoute';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import NotFoundImg from './assets/404.svg';
import About from './components/about/About';
import Description from './components/about/Description';
import Services from './components/about/Services';
import Home from './components/home/Home';
import Categories from './components/categories/Categories';
// customers
import LoginUser from './components/customer/login/LoginUser';
import RegisterUser from './components/customer/register/RegisterUser';
import ProfileUser from './components/customer/profile/ProfileUser';
import Cart from './components/customer/carts/Cart';
import Transactions from './components/customer/transactions/Transactions';
import ConfirmTransaction from './components/customer/transactions/ConfirmTransaction';
import TransactionStatus from './components/customer/transactions/TransactionStatus';
import OrdersHistory from './components/customer/history/OrdersHistory';
// vendors
import LoginVendor from './components/vendor/login/LoginVendor';
import RegisterVendor from './components/vendor/register/RegisterVendor';
import ProfileVendor from './components/vendor/profile/ProfileVendor';
import DashboardVendor from './components/vendor/dashboard/DashboardVendor';
import CollectionsVendor from './components/vendor/collections/CollectionsVendor';
import DesignUpload from './components/vendor/designs/DesignUpload';
import SalesReport from './components/vendor/sales/SalesReport';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='App-container'>
        <div className='App-content'>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='about' element={<About />}>
              <Route path='description' element={<Description />} />
              <Route path='services' element={<Services />} />
            </Route>
            <Route path='/' element={<Home />} />
            <Route path='categories' element={<Categories />} />
            {/* Udin */}


            {/* customers */}
            <Route
              path='login'
              element={
                <ProtectedRoute loginOnly={false}>
                  <LoginUser />
                </ProtectedRoute>
              }
            />
            <Route
              path='register'
              element={
                <ProtectedRoute loginOnly={false}>
                  <RegisterUser />
                </ProtectedRoute>
              }
            />
            <Route
              path='profile'
              element={
                <ProtectedRoute>
                  <ProfileUser />
                </ProtectedRoute>
              }
            />
            <Route
              path='confirm-transaction'
              element={
                <ProtectedRoute>
                  <ConfirmTransaction />
                </ProtectedRoute>
              }
            />
            <Route
              path='carts'
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path='transactions'
              element={
                <ProtectedRoute>
                  <Transactions />
                </ProtectedRoute>
              }
            />
            <Route
              path='transaction-status'
              element={
                <ProtectedRoute>
                  <TransactionStatus />
                </ProtectedRoute>
              }
            />
            <Route
              path='orders-history'
              element={
                <ProtectedRoute>
                  <OrdersHistory />
                </ProtectedRoute>
              }
            />

            {/* vendors */}
            <Route
              path='vendor-login'
              element={
                <ProtectedRoute loginOnly={false}>
                  <LoginVendor />
                </ProtectedRoute>
              }
            />
            <Route
              path='vendor-register'
              element={
                <ProtectedRoute loginOnly={false}>
                  <RegisterVendor />
                </ProtectedRoute>
              }
            />
            <Route
              path='vendor-profile'
              element={
                <ProtectedRoute vendorOnly={true}>
                  <ProfileVendor />
                </ProtectedRoute>
              }
            />
            <Route
              path='vendor-dashboard'
              element={
                <ProtectedRoute vendorOnly={true}>
                  <DashboardVendor />
                </ProtectedRoute>
              }
            />
            <Route
              path='vendor-collections'
              element={
                <ProtectedRoute vendorOnly={true}>
                  <CollectionsVendor />
                </ProtectedRoute>
              }
            />
            <Route
              path='vendor-design-upload'
              element={
                <ProtectedRoute vendorOnly={true}>
                  <DesignUpload />
                </ProtectedRoute>
              }
            />
            <Route
              path='vendor-sales'
              element={
                <ProtectedRoute vendorOnly={true}>
                  <SalesReport />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
      <Footer className='App-footer' />
    </Router>
  );
}

function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        margin: 128,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h2>Woah! Halaman tidak ditemukan...</h2>
      <br />
      <br />
      <img src={NotFoundImg} alt='404' width='320px' />
    </div>
  );
}

export default App;
