import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { ProductsHelper } from '../../helpers';
import { useUser } from '../../contexts/Contexts';
import { QUICK_BUY, CURRENT_PRODUCT } from '../../contexts/ContextConsts';
import wavey from '../../assets/wave-static-down.svg';

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleBuyNow = () => {
    let idUser;
    if (user.id !== '') {
      idUser = user.id;
    }

    console.log(user);

    const transaction = {
      idUser,
      idProduct: product.productId,
      quickBuyer: true,
      recipientName: `${user.firstName} ${user.lastName}`,
      recipientEmail: user.email,
      recipientPhone: user.phone,
    };

    sessionStorage.setItem(QUICK_BUY, JSON.stringify(transaction));
    sessionStorage.setItem(CURRENT_PRODUCT, JSON.stringify(product));

    navigate('/transactions');
  };

  useEffect(() => {
    const getProductById = async () => {
      setIsLoading(true);

      const result = await ProductsHelper.getProductById(params.id);

      setProduct(result.data);
      setIsLoading(false);
    };

    getProductById();
  }, [params.id]);

  return (
    <div
      className='min-vw-100 min-vh-100'
      style={{
        background: `url(${wavey}) no-repeat bottom`,
        backgroundSize: 'contain',
      }}
    >
      <div className='container'>
        <div className='fs-3 fw-semibold text-uppercase text-center mb-4 mt-5'>
          DESIGN/{product.productCollection}/{product.productType}/
          {product.productName}
        </div>
        {isLoading ? (
          <h3>Loading</h3>
        ) : (
          <div className='row'>
            <div className='col-8'>
              {product.designPhotos.length > 0 ? (
                <>
                  <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    indicators={false}
                  >
                    {product.designPhotos.map((item, idx) => (
                      <Carousel.Item key={idx}>
                        <img
                          className='d-block w-100'
                          src={item}
                          alt={'product slide ' + item}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <div className='row p-0 m-0'>
                    {product.designPhotos.map((item, idx) => (
                      <div className='col-4 p-0 m-0' key={idx}>
                        <img
                          className='d-block w-100 p-1'
                          key={idx}
                          src={item}
                          onClick={() => setIndex(idx)}
                          alt={'product thumb ' + item}
                        />
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                ''
              )}
            </div>
            <div className='col-4 text-start'>
              <div className='fs-4 fw-bold mb-1'>{product.productName}</div>
              <div className='fs-5 fw-semibold mb-3'>
                {ProductsHelper.toFormatted(product.productPrice)}
              </div>
              <div className='fs-5 fw-semibold mb-1'>Description</div>
              <div className='fs-6 mb-5'>{product.productDescription}</div>
              <div>
                <div className='justify-content-center'>
                  <Button
                    size='lg'
                    type='button'
                    variant='primary'
                    onClick={handleBuyNow}
                    className='fw-bold'
                  >
                    Buy
                  </Button>
                  {/* <button type='button' className='btn btn-secondary'>
                    Add to cart
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
