import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import Slider from './components/Slider';
import Offers from './components/Offers';
import Heading from './components/Heading';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import data from './data/data.json'
import Starproduct from './components/Starproduct';
import Accessories from './components/Accessories';
import Hotaccessories from './components/Hotaccessories';
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';
import NavOptions from './components/NavOptions';


function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndlifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />

      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <Starproduct Starproduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <Accessories />
      <Routes>
        <Route path='/music' element={<Hotaccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}></Route>

        <Route path='/SmartDevice' element={<Hotaccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}></Route>

        <Route path='/Home' element={<Hotaccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}></Route>

        <Route path='/LifeStyle' element={<Hotaccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />}></Route>


        <Route path='/MobileAccessories' element={<Hotaccessories MobileAccessories={data.hotAccessories.mobileAccessories} MobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}></Route>
      </Routes>

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews ProductReviews={data.productReviews} />
      <Heading text="VIDEOS" />

      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner}/>

      <Footer footer={data.footer}/>
    </Router>

  );
}

export default App;
