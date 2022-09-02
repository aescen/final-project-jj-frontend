import { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import { useAuth, useUser } from './../../../contexts/Contexts';
import wavey from '../../../assets/wave-bottom.svg';
import { UsersHelper } from '../../../helpers';

const ProfileCustomer = () => {
  const { user } = useUser();
  const { auth } = useAuth();
  const [vendor, setVendor] = useState({
    vendorName: '',
    bgExp: '',
    linkedIn: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user && auth) {
      const getVendor = async () => {
        setIsLoading(true);
        const result = await UsersHelper.getVendorById(
          user.idVendor,
          auth.accessToken,
        );

        setVendor(result.data);
        setIsLoading(false);
        console.log(result.data);
      };

      getVendor();
    }
  }, [user, auth]);

  return (
    <div className='min-vw-100'>
      <div className='position-relative'>
        <div
          className='position-absolute top-0 start-0'
          style={{
            height: '18em',
            width: '100vw',
            backgroundColor: '#373737',
          }}
        ></div>
        <div className='d-flex justify-content-center p-4'>
          {!isLoading ? (
            <div className='card mt-5' style={{width: '32em'}}>
              <div className='position-relative'>
                <div
                  className='card-img-top w-100 bg-secondary'
                  style={{
                    background: `url(${wavey}) no-repeat bottom`,
                    backgroundSize: 'contain',
                    minWidth: '24em',
                    minHeight: '24em',
                  }}
                ></div>
                {user.avatarUrl !== '' ? (
                  <img
                    src={user.avatarUrl}
                    width='12em'
                    height='12em'
                    alt='avatar'
                    className='rounded-circle position-absolute top-50 start-50 translate-middle'
                  />
                ) : (
                  <Avatar
                    name={user.firstName + ' ' + user.lastName}
                    size='14em'
                    className='rounded-circle position-absolute top-50 start-50 translate-middle'
                  />
                )}
              </div>

              <div className='card-body'>
                <h5 className='card-title fw-bold fs-4'>
                  {user.firstName + ' ' + user.lastName}
                </h5>
                <div className='mt-3 fs-5 fw-semibold'>Studio Name</div>
                <div className='fs-5'>{vendor.vendorName}</div>
                <div className='mt-3 fs-5 fw-semibold'>Email</div>
                <div className='fs-5'>{user.email}</div>
                <div className='mt-3 fs-5 fw-semibold'>LinkedIn</div>
                <a href={vendor.linkedIn} className='fs-5 text-decoration-none'>
                  {vendor.linkedIn}
                </a>
                <div className='mt-3 fs-5 fw-semibold'>Bio</div>
                <div className='fs-5 text-break'>{vendor.bgExp}</div>
              </div>
            </div>
          ) : (
            <div className='display-5'>Loading</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCustomer;
