import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { ProductsHelper } from '../../helpers';
import { useUser } from '../../contexts/Contexts';
import { QUICK_BUY, CURRENT_PRODUCT } from '../../contexts/ContextConsts';

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
    <div>
      <div className='container'>
        <div className='row text-center mb-3'>
          <div className='col'>
            <h1>HOME/RESIDENTIAL/HOUSES/NAMA-DESAIN</h1>
          </div>
        </div>
        {isLoading ? (
          <h3>Loading</h3>
        ) : (
          <div className='row'>
            <div className='col-6'>
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
                      <div className='col-6 p-0 m-0' key={idx}>
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
            <div className='col-6'>
              <h2 className='text-center'>{product.productName}</h2>
              <h3 className='/'>
                {ProductsHelper.toFormatted(product.productPrice)}
              </h3>
              <h3>Description</h3>
              <p>{product.productDescription}</p>
              <div>
                <div className='justify-content-center'>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    onClick={handleBuyNow}
                  >
                    Buy
                  </button>
                  <button type='button' className='btn btn-secondary'>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Detail;
