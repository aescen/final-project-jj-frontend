import Sidebar from '../sidebar/Sidebar';
const Layout = ({ children }) => {
  return (
    <div className='row min-vh-100 min-vw-100 p-0 m-0'>
      <div className='col-sm-1 col-md-2 flex-sm-column flex-row p-0 m-0'>
        <Sidebar />
      </div>
      <div className='col-sm-11 col-md-10 p-0 m-0'>{children}</div>
    </div>
  );
};

export default Layout;
