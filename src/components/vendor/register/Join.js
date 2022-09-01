import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Confirm from '../../commons/Confirm';
import { useAuth, useUser } from '../../../contexts/Contexts';
import { LOGOUT, DELETE_USER } from '../../../contexts/ContextConsts';

const Join = () => {
  const navigate = useNavigate();
  const { auth, dispatch } = useAuth();
  const { dispatch: userDispatch = () => {} } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [isOk, setIsOk] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmTitle] = useState('Confirm logout');
  const [confirmText, setConfirmText] = useState('');

  const handleLogout = () => {
    setConfirmText('Proceed to logout and then register vendor?');
    setShowConfirm(true);
  };

  const handleCloseConfirm = () => setShowConfirm(false);
  const handleShowConfirm = () => setShowConfirm(true);
  const handleConfirmConfirm = () => {
    userDispatch({
      type: DELETE_USER,
      payload: {},
    });
    dispatch({
      type: LOGOUT,
      payload: { isAuthenticated: false, accessToken: null },
    });
    setShowConfirm(false);
    sessionStorage.clear();
    navigate('/vendor-registration');
    window.location.reload(0);
  };

  useEffect(() => {
    setIsLoading(true);
    if (!auth.isAuthenticated) {
      setIsOk(true);
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='container'>
      <Confirm
        show={showConfirm}
        title={confirmTitle}
        text={confirmText}
        handleShow={handleShowConfirm}
        handleClose={handleCloseConfirm}
        handleConfirm={handleConfirmConfirm}
      />
      {isLoading ? (
        ''
      ) : (
        <>
          <div className='display-5 fw-semibold mt-5'>GA Arsitektur </div>
          <p className='lead text-start my-5'>
            Menjual desain berkualitas siap bangun untuk proyek anda. Kami
            mendukung vendor independen maupun kelompok menampilkan dan menjual
            karya terbaik mereka.
          </p>
          <p className='lead text-start mt-5 mb-3'>
            Ingin menjadi vendor kami? Daftarkan vendor anda dan bergabunglah
            bersama kami
          </p>
          {isOk ? (
            <span
              onClick={() => navigate('/vendor-registration')}
              className='btn btn-outline-secondary btn-lg border'
            >
              Register Vendor
            </span>
          ) : (
            <Alert>
              <div className='fs-5'>
                You need to logout and register as vendor.{' '}
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className='text-text-decoration-none' onClick={handleLogout}>
                  Logout
                </a>
              </div>
            </Alert>
          )}
        </>
      )}
    </div>
  );
};

export default Join;
