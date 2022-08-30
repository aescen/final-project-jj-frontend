import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const UploadedPhotos = ({ show = false, productPhotos = [] }) => {
  const [index, setIndex] = useState(0);
  const [imagesUrl, setImagesUrl] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    if (productPhotos.length > 0) {
      const loadImage = async (fileObj) => {
        const reader = new FileReader();
        reader.onload = (ev) => {
          setImagesUrl([...imagesUrl, ev.target.result]);
        };
        reader.readAsDataURL(fileObj);
      };
      productPhotos.forEach((item) => {
        loadImage(item);
      });
    } else {
      setImagesUrl([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productPhotos]);

  useEffect(() => {
    console.log(imagesUrl);
  }, [imagesUrl]);

  return (
    <div className={show ? '' : 'd-none'}>
      {imagesUrl.length > 0 ? (
        <>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            indicators={false}
          >
            {imagesUrl.map((item, idx) => (
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
            {imagesUrl.map((item, idx) => (
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
  );
};

export default UploadedPhotos;
