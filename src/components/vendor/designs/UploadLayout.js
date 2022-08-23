import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import ProductAttributes from './ProductAttributes';
import ProductOrganization from './ProductOrganization';
import SaveProduct from './SaveProduct';
import UploadPhotos from './UploadPhotos';

const UploadLayout = () => {
  const [uploadForm, setUploadForm] = useState({});
  const [productFeature, setProductFeature] = useState([]);
  const [productTag, setProductTag] = useState([]);

  // const formData = new FormData(ev.target);
  // const formProps = Object.fromEntries(formData);

  const onChangeUploadPhotos = (ev) => {
    console.log('upload', ev.target.name, ev.target.files);
    setUploadForm((f) => ({
      ...uploadForm,
      designPhotos: [...ev.target.files],
    }));
  };

  const onChangeProductAttributes = (ev) => {
    const name = ev.target.name;
    let value = ev.target.value;

    if (ev.target.files) {
      value = [...ev.target.files];
    }

    if (name === 'productFeatures') {
      setProductFeature((f) => ev.target.value);
      return;
    }

    setUploadForm((f) => ({
      ...uploadForm,
      [name]: value,
    }));
  };

  const onChangeProductOrganization = (ev) => {
    const name = ev.target.name;
    let value = ev.target.value;

    if (name === 'productTags') {
      setProductTag((f) => ev.target.value);
      return;
    }

    setUploadForm((f) => ({
      ...uploadForm,
      [name]: value,
    }));
  };

  const handleAddFeature = (ev) => {
    let productFeatures = [productFeature];

    if (uploadForm.productFeatures) {
      productFeatures = [...uploadForm.productFeatures, productFeature];
    }

    setUploadForm((f) => ({
      ...uploadForm,
      productFeatures,
    }));
  };

  const handleSaveProduct = (ev) => {
    ev.preventDefault();
    console.log('sav', ev.target);
    console.log(uploadForm);
  };

  return (
    <div>
      <div className='display-6 text-sm-start text-center'>
        Upload New Design
      </div>
      <br />
      <br />
      <div className='row justify-content-center'>
        <Form className='d-flex'>
          <div className='col-md-4 pt-2'>
            {/* upload photos */}
            <UploadPhotos onChangeUploadPhotos={onChangeUploadPhotos} />
          </div>
          <div className='col-md-4 pt-2 mx-4'>
            {/* product attributes */}
            <ProductAttributes
              onChangeProductAttributes={onChangeProductAttributes}
              productFeatures={uploadForm.productFeatures}
              handleAddFeature={handleAddFeature}
            />
          </div>
          <div className='col-md-4 pt-2'>
            {/* more organization & save button */}
            <ProductOrganization
              onChangeProductOrganization={onChangeProductOrganization}
            />
            <SaveProduct handleSaveProduct={handleSaveProduct} />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UploadLayout;
