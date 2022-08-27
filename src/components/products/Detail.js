import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Detail = () => {
  return (
    <div>
      <div className='container'>
        <div class='row text-center mb-3'>
          <div class='col'>
            <h1>HOME/RESIDENTIAL/HOUSES/NAMA-DESAIN</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src='https://th.bing.com/th/id/OIP.d3pRMtBPmleEvLPrk5VDkAHaF7?pid=ImgDet&rs=1'
                  alt='First slide'
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src='https://th.bing.com/th/id/OIP.d3pRMtBPmleEvLPrk5VDkAHaF7?pid=ImgDet&rs=1'
                  alt='Second slide'
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src='https://th.bing.com/th/id/OIP.d3pRMtBPmleEvLPrk5VDkAHaF7?pid=ImgDet&rs=1'
                  alt='Third slide'
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className='col-6'>
            <h2 className='text-center'>Nama Desain</h2>
            <h3 className='/'>HARGA</h3>
            <h3>Description</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div>
              <div className='justify-content-center'>
                <button type='button' class='btn btn-secondary'>
                  Secondary
                </button>
                <button type='button' class='btn btn-secondary'>
                  Secondary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Detail;
