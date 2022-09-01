import { useState, useEffect } from 'react';
import { useAuth } from './../../../contexts/Contexts';
import { CollectionsHelper } from './../../../helpers';
import Layout from '../layout/Layout';
import Collection from './Collection';

const CollectionsVendor = () => {
  const { auth } = useAuth();
  // eslint-disable-next-line no-unused-vars
  const [collectionsTmp, setCollectionsTmp] = useState([]);
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCollections = async () => {
      setIsLoading(true);
      const result = await CollectionsHelper.getCollections(auth.accessToken);
      setCollectionsTmp(result.data);
      setCollections(result.data);
      setIsLoading(false);
    };
    if (auth.accessToken) {
      getCollections();
    }
  }, [auth]);

  return (
    <Layout>
      <div className='container mb-5 px-5'>
        <div className='fw-semibold fs-3 mt-5 mb-3'>Collections</div>
        {isLoading ? (
          <></>
        ) : collections.length === 0 ? (
          <h5>No collections</h5>
        ) : (
          collections.map((item, idx) => (
            <Collection
              key={idx}
              collection={item}
              className='mx-sm-3 my-sm-4'
            />
          ))
        )}
      </div>
    </Layout>
  );
};

export default CollectionsVendor;
