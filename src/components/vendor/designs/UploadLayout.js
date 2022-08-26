/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useAuth } from './../../../contexts/Contexts';
import ProductAttributes from './ProductAttributes';
import ProductOrganization from './ProductOrganization';
import SaveProduct from './SaveProduct';
import UploadPhotos from './UploadPhotos';
import UploadedPhotos from './UploadedPhotos';
import Alert from '../../commons/Alert';
import { serialize } from 'object-to-formdata';
import UploadHelper from './../../../helpers/UploadHelper';

const UploadLayout = () => {
  const formRef = useRef(null);
  const { auth } = useAuth();
  const [alertTitle] = useState('Info');
  const [alertText, setAlertText] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [isError, setIsError] = useState(false);
  const [uploadForm, setUploadForm] = useState({});
  const [productPhotos, setProductPhotos] = useState([]);
  const [showUpload, setShowShowUpload] = useState(true);
  const [productFeature, setProductFeature] = useState('');
  const [productTag, setProductTag] = useState('');

  // const formData = new FormData(ev.target);
  // const formProps = Object.fromEntries(formData);

  const onChangeUploadPhotos = (ev) => {
    console.log('upload', ev.target.name, ev.target.files);
    setProductPhotos([...ev.target.files]);
    setUploadForm({
      ...uploadForm,
      designPhotos: [...ev.target.files],
    });
    setShowShowUpload(false);
  };

  const onChangeProductAttributes = (ev) => {
    const name = ev.target.name;
    let value = ev.target.value;

    if (ev.target.files) {
      value = [...ev.target.files];
    }

    if (name === 'productFeatures') {
      setProductFeature(ev.target.value);
      return;
    }

    setUploadForm({
      ...uploadForm,
      [name]: value,
    });
  };

  const onChangeProductOrganization = (ev) => {
    const name = ev.target.name;
    let value = ev.target.value;

    if (name === 'productTags') {
      setProductTag(ev.target.value);
      return;
    }

    setUploadForm({
      ...uploadForm,
      [name]: value,
    });
  };

  const handleAddFeature = (ev) => {
    let productFeatures = [productFeature];

    if (uploadForm.productFeatures) {
      productFeatures = [
        ...new Set([...uploadForm.productFeatures, productFeature]),
      ];
    }

    setUploadForm({
      ...uploadForm,
      productFeatures,
    });
  };

  const handlePreview = (ev) => {
    console.log('preview');
  };

  const handleResetForm = (ev) => {
    ev.preventDefault();
    console.log('reset', ev.target);
    console.log(uploadForm);

    if (formRef !== null) {
      formRef.current.reset();
      setUploadForm({});
      setProductPhotos([]);
      setShowShowUpload(true);
      setProductFeature('');
      setProductTag('');
      return;
    }

    console.log('form el is null');
  };

  const handleSaveProduct = (ev) => {
    ev.preventDefault();

    console.log(uploadForm);

    const options = {
      dotsForObjectNotation: true,
    };

    const datas = {
      ...uploadForm,
      productFeatures: JSON.stringify(uploadForm.productFeatures),
    };
    const formData = serialize(datas, options);

    const result = UploadHelper.uploadProduct(formData, auth.accessToken);
    if (result) {
      setIsError(false);
      setAlertText('Add success!');
      setShowAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    if (!isError) {
      console.log('ok');
      // navigate('/vendor-login')
    }
  };
  const handleShowAlert = () => setShowAlert(true);

  return (
    <div className='text-sm-start text-center'>
      <Alert
        show={showAlert}
        title={alertTitle}
        text={alertText}
        handleShow={handleShowAlert}
        handleClose={handleCloseAlert}
      />
      <div className='display-6 ps-sm-5 pt-4'>Upload New Design</div>
      <br />
      <br />
      <Form
        ref={formRef}
        // encType='multipart/form-data'
        // method='POST'
        className='row text-start text-wrap p-0 px-md-5 m-0 mx-5 mx-md-0 d-flex justify-content-center'
        onSubmit={(e) => e.preventDefault()}
      >
        <div className='col-sm-6 col-md-4 pt-2 w-md-33'>
          {/* upload photos */}
          <UploadPhotos
            show={showUpload}
            onChangeUploadPhotos={onChangeUploadPhotos}
          />
          <UploadedPhotos show={!showUpload} productPhotos={productPhotos} />
        </div>
        <div className='col-sm-6 col-md-4 pt-2 w-md-33'>
          {/* product attributes */}
          <hr className='d-sm-none' />
          <ProductAttributes
            onChangeProductAttributes={onChangeProductAttributes}
            productFeatures={uploadForm.productFeatures}
            handleAddFeature={handleAddFeature}
          />
        </div>
        <div className='col-sm-6 col-md-4 pt-2 w-sm-100 w-md-33'>
          {/* more organization & save button */}
          <hr className='d-md-none' />
          <ProductOrganization
            onChangeProductOrganization={onChangeProductOrganization}
          />
          <SaveProduct
            handlePreview={handlePreview}
            handleResetForm={handleResetForm}
            handleSaveProduct={handleSaveProduct}
          />
        </div>
      </Form>
    </div>
  );
};

export default UploadLayout;
