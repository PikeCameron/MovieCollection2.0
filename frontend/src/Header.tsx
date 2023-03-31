import React from 'react';

function TopBanner() {
  return (
    <>
      <div className="row bg-light">
        <div className="col-2">
          <img src="./reel.png" alt="companyLogo" />
        </div>
        <div className="col align-self-center text-start">
          <h1>Joel Hilton's Movie Collection and More!</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
