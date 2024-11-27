import Footer from '@/components/Share/Footer/Footer';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
          
            <div>{children}</div>
            <Footer/>
            
        </div>
    );
};

export default DashboardLayout;