import Avatar from 'react-avatar';
import { useUser } from './../../../contexts/UserContext';
import wavey from '../../../assets/wave-bottom.svg';

const ProfileCustomer = () => {
  const { user } = useUser();

  return (
    <div className='min-vw-100'>
      <div className='position-relative'>
        <div
          className='position-absolute top-0 start-0'
          style={{ height: '18em', width: '100vw', backgroundColor: '#373737'}}
        >
        </div>
        <div className='d-flex justify-content-center p-4'>
          {user ? (
            <div className='card vw-75 mt-5'>
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
                <h5 className='card-title'>
                  {user.firstName + ' ' + user.lastName}
                </h5>
                <p className='card-text'>{user.email}</p>
              </div>
            </div>
          ) : (
            <div className='display-5'>No data</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCustomer;
