import { Link, Outlet } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div>
        <Link to='description' style={{ textDecoration: 'none' }}>
          Description
        </Link>
        <Link to='services' style={{ textDecoration: 'none' }}>
          Services
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
