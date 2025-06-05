import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-muted py-3 border-top mt-5">
      &copy; {new Date().getFullYear()} WaiterApp. All rights reserved.
    </footer>
  );
};

export default Footer;
