import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/commons/ProtectedRoute';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import NotFoundImg from './assets/404.svg';
import About from './components/about/About';
import Home from './components/home/Home';
import Categories from './components/categories/Categories';
import Detail from './components/products/Detail';
// customers
import RegisterCustomer from './components/customer/register/RegisterCustomer';
import LoginCustomer from './components/customer/login/LoginCustomer';
import ProfileCustomer from './components/customer/profile/ProfileCustomer';
import Transactions from './components/customer/transactions/Transactions';
import ConfirmTransaction from './components/customer/transactions/ConfirmTransaction';
import TransactionStatus from './components/customer/transactions/TransactionStatus';
import OrdersHistory from './components/customer/history/OrdersHistory';
// vendors
import VendorJoin from './components/vendor/register/Join';
import RegisterVendor from './components/vendor/register/RegisterVendor';
import LoginVendor from './components/vendor/login/LoginVendor';
import ProfileVendor from './components/vendor/profile/ProfileVendor';
import DashboardVendor from './components/vendor/dashboard/DashboardVendor';
import CollectionsVendor from './components/vendor/collections/CollectionsVendor';
import DesignUpload from './components/vendor/designs/DesignUpload';
import SalesReport from './components/vendor/sales/SalesReport';
import Settings from './components/vendor/settings/Settings';

function App() {
  return (
    <Router>
      <div className='App-container'>
        <Navbar />
        <div className='App-content'>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='about' element={<About />} />

            <Route
              path='/'
              element={
                <ProtectedRoute userOnly={true} loginOnly={false} path='/'>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path='categories'
              element={
                <ProtectedRoute userOnly={true} loginOnly={false} path='categories'>
                  <Categories />
                </ProtectedRoute>
              }
            />
            <Route
              path='products/detail/:id'
              element={
                <ProtectedRoute userOnly={true} loginOnly={false} path='products'>
                  <Detail />
                </ProtectedRoute>
              }
            />

            {/* customers */}
            <Route
              path='login'
              element={
                <ProtectedRoute loginOnly={false} path='login'>
                  <LoginCustomer />
                </ProtectedRoute>
              }
            />
            <Route
              path='register'
              element={
                <ProtectedRoute loginOnly={false} path='register'>
                  <RegisterCustomer />
                </ProtectedRoute>
              }
            />
            <Route
              path='profile'
              element={
                <ProtectedRoute userOnly={true} path='profile'>
                  <ProfileCustomer />
                </ProtectedRoute>
              }
            />
            <Route
              path='confirm-transaction'
              element={
                <ProtectedRoute userOnly={true} path='confirm-transaction'>
                  <ConfirmTransaction />
                </ProtectedRoute>
              }
            />
            <Route
              path='transactions'
              element={
                <ProtectedRoute userOnly={true} path='transactions'>
                  <Transactions />
                </ProtectedRoute>
              }
            />
            <Route
              path='transaction-status'
              element={
                <ProtectedRoute userOnly={true} path='transaction-status'>
                  <TransactionStatus />
                </ProtectedRoute>
              }
            />
            <Route
              path='orders-history'
              element={
                <ProtectedRoute userOnly={true} path='orders-history'>
                  <OrdersHistory />
                </ProtectedRoute>
              }
            />

            {/* vendors */}
            <Route path='vendor-join' element={<VendorJoin />} />
            <Route
              path='vendor-login'
              element={
                <ProtectedRoute loginOnly={false} path='vendor-login'>
                  <LoginVendor />
                </ProtectedRoute>
              }
            />
            <Route
              path='vendor-registration'
              element={
                <ProtectedRoute loginOnly={false} path='vendor-registration'>
                  <RegisterVendor />
                </ProtectedRoute>
              }
            />
            <Route
              path='vendor-profile'
              element={
                <ProtectedRoute vendorOnly={true} path='vendor-profile'>
                  <ProfileVendor />
                </ProtectedRoute>
              }
            />
            <Route
              path='vendor-dashboard'
              element={
                <ProtectedRoute vendorOnly={true} path='vendor-dashboard'>
                  <DashboardVendor />
                </ProtectedRoute>
              }
            />
            <Route
              path='vendor-collections'
              element={
                <ProtectedRoute vendorOnly={true} path='vendor-collections'>
                  <CollectionsVendor />
                </ProtectedRoute>
              }
            />
            <Route
              path='vendor-design-upload'
              element={
                <ProtectedRoute vendorOnly={true} path='vendor-design-upload'>
                  <DesignUpload />
                </ProtectedRoute>
              }
            />
            <Route
              path='vendor-sales'
              element={
                <ProtectedRoute vendorOnly={true} path='vendor-sales'>
                  <SalesReport />
                </ProtectedRoute>
              }
            />
            <Route
              path='vendor-settings'
              element={
                <ProtectedRoute vendorOnly={true} path='vendor-settings'>
                  <Settings />
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
