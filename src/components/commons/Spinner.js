import { default as BSpinner } from 'react-bootstrap/Spinner';

const Spinner = () => {
  return (
    <BSpinner animation='border' role='status'>
      <span className='visually-hidden'>Loading...</span>
    </BSpinner>
  );
};

export default Spinner;
