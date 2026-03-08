import Image from "next/image";
import Footer from '../components/Footer';
import Header from '../components/Header';
import About from '../components/About/MainPage'
import BackToTop from '../components/BackToTop';
import Popup from '../components/Popup';

export default function Home() {
  return (

    <div id='main' className='flex flex-col max-w-screen-2xl 2xl:max-w-screen-xl 2xl:m-8 items-start overflow-hidden border border-stone-900 bg-stone-900 2xl:rounded-3xl'>
      <Popup message="Welcome to the site! This appears on every page load." />
      <Header />
      <About />
      <Footer />
      <BackToTop></BackToTop>
    </div>
  );
}
