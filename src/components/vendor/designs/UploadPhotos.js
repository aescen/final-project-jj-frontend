import Form from 'react-bootstrap/Form';
import './UploadPhotos.css'

const UploadPhotos = ({ show = true, onChangeUploadPhotos }) => {
  return (
    <div className={show ? '' : 'd-none'}>
      <div
        className='p-3 text-center drop-area'
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
            accept='image/png, image/jpeg, image/webp'
            onDragOver={() => console.log('dragover')}
            onDragLeave={() => console.log('dragleave')}
            onDrop={() => console.log('drop')}
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
        <p style={{ fontSize: '0.9em' }}>
          Pick minimum of 3 photos with minimum size of 720x720px, recommended
          photo size is 1400x1400px with WebP format (max photo size is 800kb)
        </p>
      </div>
    </div>
  );
};

export default UploadPhotos;
