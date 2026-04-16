import React from 'react';
import Banner from './componenet/bannner/Banner';
import CardData from './api/CardData';

// import Footer from './componenet/footer/Footer';


const page = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <Card></Card> */}
      <CardData></CardData>
      {/* <Footer></Footer> */}
     

    </div>
  );
};

export default page;