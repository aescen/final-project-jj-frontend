import CollectionItem from './CollectionItem';

const Collection = ({ collection }) => {
  return (
    <div className='row pt-4 gx-4 gy-4'>
      <h4 className='text-center'>{collection.collectionName}</h4>
      <hr/>
      {collection.products.map((item, idx) => (
        <CollectionItem key={idx} product={item} />
      ))}
      <hr/>
    </div>
  );
};

export default Collection;
