import { useNavigate } from 'react-router-dom';
import React from 'react';
// import Button from 'react-bootstrap'
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className='ms-sm-2 my-4'>
      <h2 className='display-3'>Dashboard</h2>
      <br />
      <br />
      <div className='row justify-content-around me-sm-5 mx-2 mx-sm-auto'>
        <div className='col-md-4 pt-2'>
          <div className='card crop-img '>
            <img
              src='https://siuntung.com/wp-content/uploads/2019/04/Desain-Denah-Rumah-Sederhana-dengan-3-Kamar-Tidur.jpg'
              alt='rumah'
              className='card-img-top'
              width='200'
              height='200'
            />
            <div className='card-body'>
              <button className='btn btn-primary' onClick={() => navigate('/vendor-collections')}>
                Collections
              </button>
            </div>
          </div>
        </div>
        <div className='col-md-4 pt-2'>
          <div className='card crop-img'>
            <img
              src='https://siuntung.com/wp-content/uploads/2019/04/Desain-Denah-Rumah-Sederhana-dengan-3-Kamar-Tidur.jpg'
              alt='rumah'
              className='card-img-top'
              width='200'
              height='200'
            />
            <div className='card-body'>
              <button className='btn btn-primary' onClick={() => navigate('/vendor-upload')}>Upload Design</button>
            </div>
          </div>
        </div>
        {/* <div className='col-md-4 pt-2'>
          <div className='card crop-img'>
            <img
              src='https://siuntung.com/wp-content/uploads/2019/04/Desain-Denah-Rumah-Sederhana-dengan-3-Kamar-Tidur.jpg'
              alt='rumah'
              className='card-img-top'
              width='200'
              height='200'
            />
            <div className='card-body'>
              <button className='btn btn-primary' onClick={() => navigate('/vendor-sales')}>Sales Report</button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
