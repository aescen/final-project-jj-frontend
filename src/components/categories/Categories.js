import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsHelper } from '../../helpers';
import { getCategoriesFromProducts, getProductsFromCategory } from './service';

const Categories = () => {
  const navigate = useNavigate();
  const [productsTmp, setProductsTmp] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const result = await ProductsHelper.getProducts();

      const theProducts = result.data;
      const theCategories = getCategoriesFromProducts(theProducts);

      setProducts(theProducts);
      setProductsTmp(theProducts);
      setCategories(theCategories);
      setIsLoading(false);
    };

    getProducts();
  }, []);

  function handleCategories(e) {
    const category = e.target.value;
    category !== 'All'
      ? setProducts(getProductsFromCategory(productsTmp, category))
      : setProducts(productsTmp);
  }

  return (
    <div className='min-vw-100 mt-5 px-5'>
      <div className='container-fluid'>
        {isLoading ? (
          <h3>Loading</h3>
        ) : products.length === 0 ? (
          <h3>No products</h3>
        ) : (
          <>
            <div className='row justify-content-around align-items-center'>
              {categories.map((item, index) => (
                <div key={index} className='col-md-2 mb-3'>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    key={index}
                    value={item}
                    onClick={handleCategories}
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>
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
                      <p className='card-text'>{item.productDescription}</p>
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
  );
};

export default Categories;
