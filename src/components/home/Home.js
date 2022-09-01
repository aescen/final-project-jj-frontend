import React from 'react';
import gambarrumah from '../../assets/desain1.svg';
import gambarrumah1 from '../../assets/desain.svg';
import gambarrumah2 from '../../assets/desain2.svg';
import { useNavigate } from 'react-router-dom';
import './home.css';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='min-vw-100'>
      <div className=' banner'>
        <div className='container-fluid overlay  '>
          <div className='container text-center'>
            <h4 className='display-6 fw-bold text-uppercase'>
              Jelajahi Desain Arsitektur dan Dekorasi Siap Bangun.
            </h4>
            <h4 className='display-6 fw-bold text-uppercase'>
              Di Desain oleh Arsitek dan Vendor Berkualitas.
            </h4>
            <br />
            <br />
            <h3>
              Rumah, Apatemen, Modern, Minimalis, Kontemporer, Mediteranian, Dll
            </h3>
            <br />

            <button
              type='button'
              onClick={() => navigate('categories')}
              className='btn btn-light btn-lg'
              style={{ backgroundColor: 'white' }}
            >
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>

      <div className='container-fluid pt-5 pb-5 bg-light'>
        <div className='container text-center'>
          <h2 className='display-6 fw-bold'>Populer Projects</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
            dolorum quasi? Neque consectetur odio placeat inventore perferendis
            quibusdam omnis deleniti.
          </p>

          <div className='row pt-4 gx-4 gy-4'>
            <div className='col-md-4'>
              <div className='card crop-img'>
                <img src={gambarrumah} className='card-img-top rumah' />
                <div className='card-body'>
                  <h5 className='card-title'>Lorem, ipsum.</h5>
                  <p className='card-text'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quis odit atque nam animi dolores itaque.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='card crop-img '>
                <img src={gambarrumah2} className='card-img-top rumah' />
                <div className='card-body'>
                  <h5 className='card-title'>Lorem, ipsum.</h5>
                  <p className='card-text'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quis odit atque nam animi dolores itaque.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='card crop-img'>
                <img src={gambarrumah1} className='card-img-top rumah' />
                <div className='card-body'>
                  <h5 className='card-title'>Lorem, ipsum.</h5>
                  <p className='card-text'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quis odit atque nam animi dolores itaque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='quote'>
        <div className='layar-dalam'></div>
      </section>

      <section className='hero-banner bg-light py-5'>
        <div className='container'>
          <div className='row row align-items-center'>
            <div className='col-lg-5 offset-lg-1 order-lg-1'>
              <img
                src={gambarrumah}
                className='img-fluid'
                alt='Web Development'
              />
            </div>
            <div className='col-lg-6'>
              <h1 className='mt-3'>GA Arsitektur dan Dekorasi </h1>
              <p className='lead text-secondary my-5'>
                Menjual desain berkualitas siap bangun untuk proyek anda. Kami
                mendukung vendor independen maupun kelompok menampilkan dan
                menjual karya terbaik mereka.
              </p>
              <p className='lead text-secondary my-5'>
                Ingin menjadi vendor kami? Daftarkan vendor anda dan
                bergabunglah bersama kami
              </p>
              <span
                onClick={() => navigate('vendor-registration')}
                className='btn btn-outline-secondary btn-lg border'
              >
                Register Vendor
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
