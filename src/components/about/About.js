import React from 'react';
import kAri from '../../assets/kakAri.jpeg';
import kAesce from '../../assets/kakAesce.jpg';
import kBaharudin from '../../assets/kakBaharudin.jpeg';
import kakIna from '../../assets/kakIna.jpeg';
import kAbrian from '../../assets/kakAbrian.jpeg';
import kMirza from '../../assets/kakMirza.jpeg';

const About = () => {
  return (
    <div className='container-fluid vw-100'>
      <div className='row justify-content-evenly'>
        <div
          className='display-5 text-center fw-semibold mt-5'
          style={{ width: '16em' }}
        >
          Bingung dengan desain rumah yang ingin di bangun?
        </div>
        <div className='col-6 my-5'>
          <h6 className='text-center'>
            Jangan khawatir karena disini kami menyajikan berbagai design rumah
            yang cocok buat anda.
          </h6>
          <hr className='py-3' />
          <h6 className='text-center'>
            Design yang kami tampilkan di Website merupakan design berkualitas
            dari vendor yang telah kami terpercaya.
          </h6>
          <hr className='py-3' />
          <h6 className='text-center'>
            Kami juga membuka bagi para arsitek untuk memasarkan hasil karya
            yang terlah di buat.
          </h6>
          <hr className='py-3' />
        </div>
      </div>
      <div
        className='row justify-content-center my-5'
        style={{ backgroundColor: '#A7B5C0' }}
      >
        <h4 className='my-3 text-center'>Team Kami </h4>
        <div className='row text-center mt-5'>
          <div className='col-12 col-md-4 col-sm-6 col-lg-2'>
            <img
              src={kAri}
              alt='ari'
              className='shadow-lg'
              style={{ height: '10em' }}
            />
            <p className='fs-6 fw-semibold mt-2'>Arrie Bhaskara</p>
          </div>
          <div className='col-12 col-md-4 col-sm-6 col-lg-2'>
            <img
              src={kAesce}
              style={{ height: '10em' }}
              alt='aesce'
              className='shadow-lg'
            />
            <p className='fs-6 fw-semibold mt-2'>Ashadi Putra</p>
          </div>
          <div className='col-12 col-md-4 col-sm-6 col-lg-2'>
            <img
              src={kBaharudin}
              style={{ height: '10em' }}
              alt='bahar'
              className='shadow-lg'
            />
            <p className='fs-6 fw-semibold mt-2'>Baharudin Fahrul</p>
          </div>
          <div className='col-12 col-md-4 col-sm-6 col-lg-2'>
            <img
              src={kakIna}
              style={{ height: '10em' }}
              alt='ina'
              className='shadow-lg'
            />
            <p className='fs-6 fw-semibold mt-2'>Ina Septiana</p>
          </div>
          <div className='col-12 col-md-4 col-sm-6 col-lg-2'>
            <img
              src={kAbrian}
              style={{ height: '10em' }}
              alt='brian'
              className='shadow-lg'
            />
            <p className='fs-6 fw-semibold mt-2'>Abriansyah</p>
          </div>
          <div className='col-12 col-md-4 col-sm-6 col-lg-2'>
            <img
              src={kMirza}
              style={{ height: '10em' }}
              alt='mirza'
              className='shadow-lg'
            />
            <p className='fs-6 fw-semibold mt-2'>Mirza</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
