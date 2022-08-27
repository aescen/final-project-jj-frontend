import CollectionItem from './CollectionItem';

const Collection = ({ collection }) => {
  return (
    <div className='row pt-4 gx-4 gy-4'>
      <h2 className='text-center'>{collection.collectionName}</h2>
      {collection.products.map((item, idx) => (
        <CollectionItem key={idx} product={item} />
      ))}
    </div>
  );
};

export default Collection;
