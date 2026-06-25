import React from 'react';
import Buttons from '../shared/Buttons';
import Slider from 'react-slick';

// Images
import Image1 from '../../assets/category/earphone.png';
import Image2 from '../../assets/category/macbook.png';
import Image3 from '../../assets/category/speaker.png';
import Image4 from '../../assets/category/vr.png';
import Image5 from '../../assets/category/gaming.png';

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Ice Shop",
    title: "Portable",
    title2: "Headphone",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Ice Shop",
    title: "Classic",
    title2: "Laptops",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Ice Shop",
    title: "Branded",
    title2: "JazzBox",
  },
  {
    id: 4,
    img: Image4,
    subtitle: "Ice Shop",
    title: "Branded",
    title2: "Visual",
  },
  {
    id: 5,
    img: Image5,
    subtitle: "Ice Shop",
    title: "Branded",
    title2: "Laptops",
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container mx-auto mt-5">
      <div className='overflow-hidden rounded-3xl min-h-112.5 sm:min-h-87.5 dark:bg-gray-900  bg-gray-300 flex shadow-md justify-center items-center'>
        <div className='container pb-5 pe-8 sm:pb-0 px-5'>
          {/* Hero section */}
          <Slider {...settings}>
            {
              HeroData.map((data) => (
                <div className="" key={data.id}>
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* Text content section */}
                    <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                      <h1
                        data-aos-duration='500'
                        data-aos-once='true'
                        data-aos="zoom-out"
                        className='text-2xl sm:text-6xl dark:text-white/70 lg:text-2xl font-bold'>{data.subtitle}</h1>

                      <h1
                        data-aos-duration='500'
                        data-aos-once='true'
                        data-aos="zoom-out"
                        className='text-5xl sm:text-6xl lg:text-7xl dark:text-white/20 font-bold'>{data.title}</h1>
                      <h1
                        data-aos-duration='500'
                        data-aos-once='true'
                        data-aos="zoom-out"
                        className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{data.title2}</h1>
                      <div
                        data-aos-duration='500'
                        data-aos-once='true'
                        data-aos="zoom-out" >
                        <Buttons
                          text='Shop by category'
                          bgColor='bg-brand-blue'
                          textColor='text-white'
                        />
                      </div>
                    </div>
                    {/* Image section */}
                    <div className="me-3 order-1 sm:order-2">
                      <div className="relative z-10 overflow-hidden"
                        data-aos-once='true'
                        data-aos="zoom-in" >
                        <img src={data.img} alt=""
                          className="w=75 h-75 sm:h-112 sm:w-md mx-auto sm:scale-105 lg:scale-110 object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Hero


// import React from 'react';
// // import Buttons from '../shared/Buttons';
// import Slider from 'react-slick'

// // Images
// import Image1 from '../../assets/products/men-cozy-fleece-hoodie-light-teal.jpg'
// import Image2 from '../../assets/products/men-cozy-fleece-hoodie-light-teal.jpg'
// import Image3 from '../../assets/products/men-cozy-fleece-hoodie-light-teal.jpg'
// import Image4 from '../../assets/products/men-cozy-fleece-hoodie-light-teal.jpg'
// import Image5 from '../../assets/products/men-cozy-fleece-hoodie-light-teal.jpg'

// const Hero = () => {

//   const HeroData = [
//     {
//       id: 1,
//       img: Image1,
//       subtitle: "Beats Solo",
//       title: "Wireless",
//       title2: "Headphone",
//     },
//     {
//       id: 2,
//       img: Image2,
//       subtitle: "Beats Solo",
//       title: "Wireless",
//       title2: "Virtual",
//     },
//     {
//       id: 3,
//       img: Image3,
//       subtitle: "Beats Solo",
//       title: "Branded",
//       title2: "Laptops",
//     },
//     {
//       id: 4,
//       img: Image4,
//       subtitle: "Beats Solo",
//       title: "Branded",
//       title2: "Laptops",
//     },
//     {
//       id: 5,
//       img: Image5,
//       subtitle: "Beats Solo",
//       title: "Branded",
//       title2: "Laptops",
//     },
//   ];

//   const Hero = () => {

//     const settings = {
//       dots: false,
//       arrows: false,
//       infinite: true,
//       speed: 800,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 4000,
//       cssEase: "ease-in-out",
//       pauseOnHover: false,
//       pauseOnFocus: true,
//     };

//     return (
//       <div className='container mx-auto'>
//         <div className="w-full h-[660px] bg-gray-500 mt-7">
//           <Slider {...settings}>
//             {HeroData.map((data) => (
//               <div className="">
//                 <div key={data.id}>
//                   <h1>{data.subtitle}</h1>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     )
//   }
// }

// export default Hero