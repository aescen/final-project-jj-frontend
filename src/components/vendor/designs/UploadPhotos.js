import Form from 'react-bootstrap/Form';

const UploadPhotos = ({ onChangeUploadPhotos }) => {
  return (
    <div>
      <div
        className='p-3 text-center'
        style={{
          backgroundColor: 'lightgray',
          border: '2px dashed black',
          cursor: 'pointer',
        }}
      >
        <Form.Group className='mb-3' controlId='uploadPhotos'>
          <Form.Label
            className='form-label'
            style={{
              cursor: 'pointer',
            }}
          >
            <div>
              <i className='bi bi-images' style={{ fontSize: '5em' }}></i>
              <h4>Choose photos</h4>
              <p>or drag & drop photos here</p>
            </div>
          </Form.Label>
          <Form.Control
            className='form-control'
            type='file'
            name='designPhotos[]'
            onChange={onChangeUploadPhotos}
            accept='image/png,image/jpeg,image/webp'
            multiple
            style={{
              width: 'auto',
              opacity: 0,
              position: 'absolute',
              zIndex: -1,
            }}
          />
        </Form.Group>
      </div>
      <div>
        <br />
        <h6>Upload product photos</h6>
        <p style={{ fontSize: '0.5em' }}>
          Pick minimum of 3 photos with minimum size of 360x360px (recommended
          photo size is 720x720px)
        </p>
      </div>
    </div>
  );
};

export default UploadPhotos;
