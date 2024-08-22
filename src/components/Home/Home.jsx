import React, { useEffect, useRef } from 'react';
import './Home.css';
import fashion from '../../assets/fashion.mp4'
import fashion2 from '../../assets/fashion2.mp4'
import fashion3 from '../../assets/fashion3.mp4'
import city from '../../assets/city.mp4';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import page2image1 from '../../assets/page2image1.jpg'
import page2image2 from '../../assets/page2image2.jpg'
import page3video4 from '../../assets/page3video4.mp4'
import summer1 from '../../assets/summer1.jfif'
import summer2 from '../../assets/summer2.jfif'
import monsoon1 from '../../assets/monsoon1.jfif'
import monsoon3 from '../../assets/monsoon3.jfif'
import winter1 from '../../assets/winter1.jfif'
import winter2 from '../../assets/winter2.jfif'
import Navbar from '../Navbar/Navbar'
import page5img1 from '../../assets/page5img1.jfif'
import page5img2 from '../../assets/page5img2.jfif'
import page5img3 from '../../assets/page5img3.jfif'
import page5video1 from '../../assets/Page5video1.mp4'
import page5video2 from '../../assets/Page5video2.mp4'
import page5video3 from '../../assets/Page5video3.mp4'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'
import logo5 from '../../assets/logo5.png'
import logo6 from '../../assets/logo6.png'
import logo7 from '../../assets/logo7.png'
import logo8 from '../../assets/logo8.png'
import logo9 from '../../assets/logo9.png'
import logo10 from '../../assets/logo10.png'
import useLocoScroll from '../../hooks/useLocoScroll';
import { useNavigate } from 'react-router';

const Home = () => {
  const nav = useNavigate();

  useLocoScroll(true);


  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {

      // const tl = gsap.timeline({
      //   defaults: {
      //     ease: "none"
      //   },

      //   scrollTrigger: {
      //     trigger: '#page1',

      //     start: "30% 30%",
      //     end: "70% center",

      //     scrub: true,
      //     pin: true,

      //     markers: true,
      //     refreshPriority: 2
      //   }
      // });

      gsap.to('#page1-text-div h1', {
        x: -150,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: '#page1',
          start: "20% 30%",
          end: "40% 30%",
          scrub: 2,
          // markers: true,
        }
      })
      gsap.to('#page1-text-div h2', {
        x: 150,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: '#page1',
          start: "20% 30%",
          end: "40% 30%",
          scrub: 2,
          // markers: true,
        }
      })
      gsap.to('#page1 video', {
        scale: 1.3,
        duration: 2,
        scrollTrigger: {
          trigger: '#page1',
          start: "25% 30%",
          end: "60% center",
          scrub: 2,
          // markers: true,
        }
      })

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '#home-div',
          // markers: true,
          start: 'top -80%',
          end: 'top -130%',
          scrub: 2,
        }
      })
      tl2.to('section', {
        backgroundColor: '#FBFCF8',
        duration: 2,
      })
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: '#home-div',
          // markers: true,
          start: 'top -350%',
          end: '-20% -370%',
          scrub: 2,
        }
      })
      tl3.to('section, #page3-left-div', {
        backgroundColor: 'black',
        duration: 2,
      })
      gsap.from('#page3-right-div h1', {
        y: 300,
        scrollTrigger: {
          trigger: '#page3-right-div',
          // markers: true,
          start: '15% center',
          end: '20% center',
          scrub: 2,
        }
      })
      gsap.from('#page3-right-div p', {
        // delay:0.5,
        y: 300,
        scrollTrigger: {
          trigger: '#page3-right-div',
          // markers: true,
          start: '20% center',
          end: '25% center',
          scrub: 2,
        }
      })
      gsap.to('#div-loop', {
        xPercent: -100,
        duration: 9,
        ease: 'linear',
        repeat: -1,
      });
      gsap.to('.video1 img,.video1 video', {
        scale: 0.9,
        // opacity:1,
        scrollTrigger: {
          trigger: '#page5',
          start: '30% center',
          end: 'center center',
          scrub: 2,
        }
      })
      gsap.to('section', {
        backgroundColor: 'white',
        scrollTrigger: {
          trigger: '#page6',
          start: '-15% center',
          end: '20% center',
          scrub: 2,
        }
      })

      ScrollTrigger.refresh();

    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div data-scroll-container className="App">
        <Navbar />
        <div ref={component} id='home-container'>
          <section id='page1' className=' bg-black'>

            <div id='home-div' className=' w-full h-[140vh] flex flex-col justify-center items-center'>

              <div id='page1-text-div' className=' h-[50vh] w-[100%] flex flex-col justify-center items-start pl-[2%]'>
                <h1 className=' text-6xl'>Discover unbeatable deals &</h1>
                <h2 className=' text-6xl ml-[10vw]'>exclusive collections at your fingertips</h2>
              </div>
              <video autoPlay muted loop src={fashion3} className=' w-[70%] h-[90vh] '></video>
            </div>

          </section>
          <section id='page2' className=' w-full h-[150vh] relative bg-black border-b-2 border-b-black-500'>
            <h1 className=' w-full text-center pt-24 text-7xl text-black font-bold'>New Collection</h1>

            <div className=' w-full h-[90%] flex justify-center items-center'>

              <div id='image1-info' className=' absolute top-[35vh] left-[5vw]'>
                <h1 className=' text-black text-4xl font-bold text-left'>Discover Our Trendy Collection</h1>
                <p className=' text-black w-[20vw] text-left'>Step into the spotlight with our latest collection of fashion-forward apparel. From chic,
                  tailored outfits to effortlessly stylish casual wear, each piece is crafted with the finest
                  materials and designed to make a statement.</p>
              </div>

              <div id='page2-left-div' className=' w-[40%] h-[85%] flex flex-col justify-center items-center gap-5'>
                <img src={page2image1} alt="model" className=' h-[83%] w-[90%] object-cover' />
                <button className=' w-[10vw] bg-black border-none rounded-lg' onClick={() => { nav('/products') }}>View Product</button>
              </div>

              <div id='page2-right-div' className=' w-[30%] h-[85%] flex flex-col justify-center items-center gap-5'>
                <div>
                  <h1 className=' text-black text-left'>Elegant Earrings for Every Occasion</h1>
                  <p className=' w-[20vw] text-black text-left'>Discover the perfect blend of sophistication and style with our exquisite collection of earrings.
                    Designed to complement any outfit, these elegant pieces are crafted with attention to detail,
                    ensuring a stunning look that catches the light beautifully.</p>
                </div>
                <img src={page2image2} alt="model" className=' h-[50%] w-[100%] object-cover p-0' />
                <button className=' w-[10vw] bg-black border-none rounded-lg' onClick={() => { nav('/products') }}>View Product</button>
              </div>

            </div>

          </section>
          <section className=' h-[90vh] w-full flex justify-between'>

            <div id='page3-left-div' className=' h-[100vh] w-[45%] flex justify-center items-center'>
              <video src={page3video4} autoPlay muted loop className=' w-[80%] h-[80%]  rounded-3xl border border-solid border-white'></video>
            </div>

            <div id='page3-right-div' className=' h-[100%] w-[50%] flex flex-col justify-center items-center'>
              <div className=' h-auto w-auto overflow-hidden'>
                <h1 className=' text-black mb-16 w-[100%]'><span className=' text-black'>EXPLORE</span> <br />Our Latest Hoodies Collection</h1>
              </div>
              <div className=' h-auto w-auto overflow-hidden'>
                <p className=' text-black w-[100%] pr-[5%] text-center'>Discover our exclusive range of hoodies designed for both comfort and style.
                  Each piece in our collection is crafted from premium materials,
                  ensuring a perfect blend of warmth and durability.
                  Whether you're looking for a cozy everyday essential or a standout piece for your casual wardrobe,
                  we have something for everyone. Shop now to find your new
                  favorite hoodie and stay ahead of the fashion curve</p>
              </div>
              <div id='page3-arrow-div' className=' w-full mt-7'>
                <span className=' h-[70px] w-[70px] border border-solid border-black rounded-full flex justify-center items-center text-center p-5  cursor-pointer'>
                  <img src="https://static.vecteezy.com/system/resources/previews/017/785/077/original/right-arrow-icon-on-transparent-background-free-png.png" alt="arrow" className=' h-[20px] w-[40px]' />
                </span>
              </div>
            </div>
          </section>
          <section id='page4' className=' w-full h-[100vh] flex flex-col justify-center items-center p-[20px]'>

            <div id='page3-div' className=' w-[70%] h-[10vh] flex justify-around items-center m-[10px]'>
              <img src={summer1} alt="" className=' h-[45vh] w-[15vw]' />
              <div className='page3-text-div h-[90%] w-[23%]'>
                <h1 className='text-h1 font-bold text-6xl text-center'>SUMMER</h1>
                <h1 className='text-h1 font-bold text-6xl text-center'>SUMMER</h1>
              </div>
              <img src={summer2} alt="" className=' h-[45vh] w-[15vw]' />
            </div>

            <div id='page3-div' className=' w-[90%] h-[10vh] flex justify-around items-center m-[10px]'>
              <img src={monsoon1} alt="" className=' h-[45vh] w-[15vw]' />
              <div className='page3-text-div h-[90%] w-[23%]'>
                <h1 className='text-h1 font-bold text-6xl text-center'>MONSOON</h1>
                <h1 className='text-h1 font-bold text-6xl text-center'>MONSOON</h1>
              </div>
              <img src={monsoon3} alt="" className=' h-[45vh] w-[15vw]' />
            </div>

            <div id='page3-div' className=' w-[70%] h-[10vh] flex justify-around items-center m-[10px]'>
              <img src={winter1} alt="" className=' h-[45vh] w-[15vw]' />
              <div className='page3-text-div h-[90%] w-[23%]'>
                <h1 className='text-h1 font-bold text-6xl text-center'>WINTER</h1>
                <h1 className='text-h1 font-bold text-6xl text-center'>WINTER</h1>
              </div>
              <img src={winter2} alt="" className=' h-[45vh] w-[15vw]' />
            </div>

          </section>
          <section id='page5' className=' min-h-[115vh] w-[100vw] flex flex-col justify-center items-center'>

            <div id="moving-container" className="h-[20vh] w-full overflow-hidden relative border-t-2 border-b-2 hover:text-gray-400 p-[20px]">

              <div id="div-loop" className=" flex whitespace-nowrap">
                <div id="div-loop" className="flex items-center">
                  <h1 className="inline-block text-8xl">Discount 20%</h1>
                  <div className="h-[50px] w-[50px] rounded-full bg-orange-500 z-10 inline-block mx-4"></div>
                  <h1 className="inline-block text-8xl">Discount 20%</h1>
                  <div className="h-[50px] w-[50px] rounded-full bg-orange-500 z-10 inline-block mx-4"></div>
                  <h1 className="inline-block text-8xl">Discount 20%</h1>
                  <div className="h-[50px] w-[50px] rounded-full bg-orange-500 z-10 inline-block mx-4"></div>
                </div>
                <div id="div-loop" className="flex items-center">
                  <h1 className="inline-block text-8xl">Discount 20%</h1>
                  <div className="h-[50px] w-[50px] rounded-full bg-orange-500 z-10 inline-block mx-4"></div>
                  <h1 className="inline-block text-8xl">Discount 20%</h1>
                  <div className="h-[50px] w-[50px] rounded-full bg-orange-500 z-10 inline-block mx-4"></div>
                  <h1 className="inline-block text-8xl">Discount 20%</h1>
                  <div className="h-[50px] w-[50px] rounded-full bg-orange-500 z-10 inline-block mx-4"></div>
                </div>
                <div id="div-loop" className="flex items-center">
                  <h1 className="inline-block text-8xl">Discount 20%</h1>
                  <div className="h-[50px] w-[50px] rounded-full bg-orange-500 z-10 inline-block mx-4"></div>
                  <h1 className="inline-block text-8xl">Discount 20%</h1>
                  <div className="h-[50px] w-[50px] rounded-full bg-orange-500 z-10 inline-block mx-4"></div>
                  <h1 className="inline-block text-8xl">Discount 20%</h1>
                  <div className="h-[50px] w-[50px] rounded-full bg-orange-500 z-10 inline-block mx-4"></div>
                </div>

              </div>
            </div>

            <div className=' w-[99vw] h-[90vh] mt-[5vh] flex justify-between items-center'>

              <div className="video1 w-[32.33%] h-[100%] relative">
                <img src={page5img1} alt="" className=' h-full w-full object-cover object-center absolute top-0 left-0 z-10 scale-[0.5] rounded-3xl' />
                <video src={page5video1} muted loop autoPlay className=' h-[100%] w-[100%] object-cover object-center absolute top-0 left-0 scale-[0.5] rounded-3xl'></video>
              </div>
              <div className="video1 w-[32.33%] h-[100%] relative">
                <img src={page5img2} alt="" className=' h-full w-full object-cover object-center absolute top-0 left-0 z-10 scale-[0.5] rounded-3xl' />
                <video src={page5video2} muted loop autoPlay className=' h-[100%] w-[100%] object-cover object-top absolute top-0 left-0 scale-[0.5] rounded-3xl'></video>
              </div>
              <div className="video1 w-[32.33%] h-[100%] relative">
                <img src={page5img3} alt="" className=' h-full w-full object-cover object-center absolute top-0 left-0 z-10 scale-[0.5] rounded-3xl' />
                <video src={page5video3} muted loop autoPlay className=' h-[100%] w-[100%] object-cover object-top absolute top-0 left-0 scale-[0.5] rounded-3xl'></video>
              </div>

            </div>

          </section>
          <section id='page6' className='h-[90vh] pt-[50px]'>

            <div id="moving-container" className=" relative h-[25vh] overflow-hidden ">
              <div id="div-loop" className="flex items-center h-[100%]">
                <img src={logo3} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo4} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo5} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo6} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo7} alt="" className=' w-[220px] h-[90%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo8} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo9} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo10} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo3} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo4} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo5} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo6} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo7} alt="" className=' w-[220px] h-[90%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo8} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo9} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo10} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo3} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo4} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo5} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo6} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo7} alt="" className=' w-[220px] h-[90%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo8} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo9} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
                <img src={logo10} alt="" className=' w-[220px] h-[100%] object-contain object-center inline-block mr-[90px]' />
              </div>
            </div>

            <div className=' h-[65vh] w-[100vw] relative top-0 left-0 mt-[50px]'>
              <div className="relative top-0 left-0 z-10 mx-auto w-[98vw] h-[100%] px-4 bg-black rounded-r-2xl rounded-l-2xl ">
                <div className="-m-6 flex flex-wrap">
                  <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                    <div className="flex h-full flex-col justify-between ">
                      <div className="mb-4 inline-flex justify-center items-center m-[10px]">
                        <span className="ml-4 text-lg font-bold">@NexGenGlam</span>
                      </div>
                      <div>
                        <p className="mb-4 text-base font-medium">When Art Meets Fashion</p>
                        <p className="text-sm">
                          &copy; Copyright 2024. All Rights Reserved by NexGenGlam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                    <div className="h-full">
                      <h3 className="tracking-px mb-9 text-xs font-semibold uppercase ">
                        Company
                      </h3>
                      <ul>
                        <li className="mb-4">
                          <a className=" text-base font-medium hover:text-gray-400" href="#">
                            Features
                          </a>
                        </li>
                        <li className="mb-4">
                          <a className=" text-base font-medium hover:text-gray-400" href="#">
                            Pricing
                          </a>
                        </li>
                        <li className="mb-4">
                          <a className=" text-base font-medium hover:text-gray-400" href="#">
                            Affiliate Program
                          </a>
                        </li>
                        <li>
                          <a className=" text-base font-medium hover:text-gray-400" href="#">
                            Press Kit
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                    <div className="h-full">
                      <h3 className="tracking-px mb-9  text-xs font-semibold uppercase ">
                        Support
                      </h3>
                      <ul>
                        <li className="mb-4">
                          <a className=" text-base font-medium hover:text-gray-400" href="#">
                            Account
                          </a>
                        </li>
                        <li className="mb-4">
                          <a className=" text-base font-medium hover:text-gray-400" href="#">
                            Help
                          </a>
                        </li>
                        <li className="mb-4">
                          <a className=" text-base font-medium hover:text-gray-400" href="#">
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a className=" text-base font-medium hover:text-gray-400" href="#">
                            Customer Support
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                    <div className="h-full">
                      <h3 className="tracking-px mb-9  text-xs font-semibold uppercase ">
                        Legals
                      </h3>
                      <ul>
                        <li className="mb-4">
                          <a className=" text-base font-medium hover:text-gray-400" href="#">
                            Terms &amp; Conditions
                          </a>
                        </li>
                        <li className="mb-4">
                          <a className=" text-base font-medium hover:text-gray-400" href="#">
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a className=" text-base font-medium hover:text-gray-400" href="#">
                            Licensing
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </section>
        </div>
      </div>
    </>
  )
}

export default Home
