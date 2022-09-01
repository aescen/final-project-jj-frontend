import { useEffect, useState } from 'react';
import gambarrumah from '../../assets/desain1.svg';
import { useNavigate } from 'react-router-dom';
import { ProductsHelper } from '../../helpers';

import './home.css';

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const result = await ProductsHelper.getProducts();

      const theProducts = result.data.slice(0, 3);

      setProducts(theProducts);
      setIsLoading(false);
    };

    getProducts();
  }, []);

  return (
    <div className='min-vw-100'>
      <div className=' banner'>
        <div className='container-fluid overlay  '>
          <div className='container text-center'>
            <h4 className='display-6 fw-bold text-uppercase'>
              Jelajahi Desain Arsitektur Siap Bangun.
            </h4>
            <h4 className='display-6 fw-bold text-uppercase'>
              Di Desain oleh Vendor Berkualitas.
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
          <h2 className='display-6 fw-bold mb-4'>Popular Projects</h2>
          {isLoading ? (
            <h3>Loading</h3>
          ) : products.length === 0 ? (
            <h3>No products</h3>
          ) : (
            <>
              <div className='row text-center pt-4 gx-4 gy-4 p-4'>
                {products.map((item) => (
                  <div className='col-md-4' key={item.productId}>
                    <div className='card crop-img'>
                      <img
                        src={item.designPhotos[0]}
                        className='card-img-top'
                        height='200'
                        alt={item.productId}
                      />
                      <div className='card-body'>
                        <h5 className='card-title'>{item.productName}</h5>
                        <p className='card-text popular-desc-text'>{item.productDescription}</p>
                        <button
                          type='button'
                          className='btn btn-secondary'
                          onClick={() =>
                            navigate(`/products/detail/${item.productId}`)
                          }
                        >
                          More Info
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
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
              <h1 className='mt-3'>GA Arsitektur </h1>
              <p className='lead text-start text-secondary my-5'>
                Menjual desain berkualitas siap bangun untuk proyek anda. Kami
                mendukung vendor independen maupun kelompok menampilkan dan
                menjual karya terbaik mereka.
              </p>
              <p className='lead text-start text-secondary my-5'>
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
