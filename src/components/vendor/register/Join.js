import React from 'react';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='display-5 fw-semibold mt-5'>GA Arsitektur </div>
      <p className='lead text-start my-5'>
        Menjual desain berkualitas siap bangun untuk proyek anda. Kami mendukung
        vendor independen maupun kelompok menampilkan dan menjual karya terbaik
        mereka.
      </p>
      <p className='lead text-start mt-5 mb-3'>
        Ingin menjadi vendor kami? Daftarkan vendor anda dan bergabunglah
        bersama kami
      </p>
      <span
        onClick={() => navigate('/vendor-registration')}
        className='btn btn-outline-secondary btn-lg border'
      >
        Register Vendor
      </span>
    </div>
  );
};

export default Join;
