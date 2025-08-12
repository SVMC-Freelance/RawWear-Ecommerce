import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';

const breadcrumbs = ({ padding = "py-5" }) => { 
  const navigate = useNavigate();
  const location = useLocation();

  // Break the path into segments
  const pathnames = location.pathname.split('/').filter(Boolean);

  // Optional: Mapping to make names more user-friendly
  const nameMap = {
    homepage: 'Home',
    profile: 'Profile',
    myorder: 'My Orders',
    wishlist: 'Wishlist',
    newaddress: 'New Address',
    cart: 'Cart',
    checkout: 'Checkout'
  };

  return (
     <nav
      className={`text-gray-600 flex items-center space-x-2 ${padding}`}
      aria-label="Breadcrumb"
    >
      <GoHomeFill
        className="cursor-pointer"
        onClick={() => navigate('/homepage')}
      />
      {pathnames.map((name, index) => {
        const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
        const isLast = index === pathnames.length - 1;

        return (
          <React.Fragment key={index}>
            <span>/</span>
            {isLast ? (
              <span className="text-gray-800 font-medium capitalize">
                {nameMap[name] || name}
              </span>
            ) : (
              <button
                onClick={() => navigate(routeTo)}
                className="capitalize hover:underline"
              >
                {nameMap[name] || name}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default breadcrumbs;
