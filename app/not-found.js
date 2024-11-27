import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-red-500">404 !!! </h1>
 
      <Link href="/"> 
      <button className="btn btn-primary">Go Home</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default NotFoundPage;