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
      <div className='container-fluid'>
        <h2>Collections</h2>
        {isLoading ? (
          <></>
        ) : collections.length === 0 ? (
          <h3>No collections</h3>
        ) : (
          collections.map((item, idx) => (
            <Collection key={idx} collection={item} />
          ))
        )}
      </div>
    </Layout>
  );
};

export default CollectionsVendor;
