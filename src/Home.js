import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
        <div className="home__container">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWPhase1/5_DesktopHero_Unrec_150x600-._CB419216629_.jpg" alt="Home Banner" className="home__banner"/>  
        <div className="home__row">
            {/*product */}
            <Product id="21321" title='Fossil Watch OS 6' price={15000} image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQsRnGYAdEcO6t97EFZ06mRPIWR_G27Y7aLA&usqp=CAU' rating={2}/>
            {/*product */}
            <Product  id="1671"  title='Beardp Hair Wax and Hair Serum' price={20000} image='https://beardoc.s3.ap-south-1.amazonaws.com/uploads/x283-hair-beard-styling-duo-gray-background-4697.jpg' rating={3}/>
            </div>  

            <div className="home__row">
            {/*product */}
            <Product  id="0232" title='One Plus 8T' price={20000} image='https://image01.oneplus.net/ebp/202009/27/1-m00-1a-a5-rb8lb19wnp2ac5lkaah-1n-vcs4824_840_840.png' rating={5}/>
            {/*product */}
            <Product  id="9092" title='Asus TUF Gaming MotherBoard' price={18000} image='https://images-eu.ssl-images-amazon.com/images/I/61B7e9pNOPL._AC_UL270_SR270,270_.jpg' rating={1}/>
            {/*product */}
            <Product id="7873" title='Bose Wireless Ear Buds' price={2991} image='https://m.media-amazon.com/images/I/41TuPcxTe8L._AC_SY200_.jpg' rating={2}/>
            </div>  
            
            <div className="home__row">
            {/*product */}
            <Product id="5653" title='MacBook Pro 13-inch' price={123181} image='https://cdnb.artstation.com/p/assets/images/images/016/802/459/large/shuja-shuaib-banner.jpg?1553535424' rating={4}/>
            </div> 

        </div>
    </div>
    )
}

export default Home
