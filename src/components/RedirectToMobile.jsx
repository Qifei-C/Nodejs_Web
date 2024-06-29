import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RedirectToMobile = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent);
      const isCurrentlyMobileRoute = location.pathname === '/mobile';

      if (isMobile && !isCurrentlyMobileRoute) {
        navigate('/mobile');
      } else if (!isMobile && isCurrentlyMobileRoute) {
        navigate('/web'); // Redirect back to the main content route
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [navigate, location]);

  return children;
};

export default RedirectToMobile;
