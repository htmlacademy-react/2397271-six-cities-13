import React, {ReactNode} from 'react';
import Header from '../Header';
import Footer from '../Footer';

function Layout({children}:ReactNode): ReactNode {
  return (
    <div className='page page--gray page--main'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
