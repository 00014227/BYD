import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import bydVideo from './assets/BYDHAN.mp4'
import song from './assets/Song.mp4'
import chazor from './assets/chazor.mp4'
import { useEffect, useRef, useState } from 'react';
import { useScroll, animated } from '@react-spring/web';

function App() {
  const {scrollYProgress} = useScroll();
  const headingTexts = ['song plus dm-i', 'New Heading 1', 'New Heading 2', 'New Heading 3'];
  const [headerIndex, setHeaderIndex] = useState(0);

  const handleScroll = (event) => {
    const scrollPosition = event.target.scrollTop;

    // Example: Change heading text based on scroll position
    if (scrollPosition > 250) {
      // Cycle through headingTexts array
      const newIndex = (headerIndex + 1) % headingTexts.length;
      setHeaderIndex(newIndex);
    } else {
      setHeaderIndex(0); // Back to the initial heading when scrolling back to the top
    }
  };

  return (
    <div onScroll={handleScroll}
      className="scroll-container scroll-smooth overflow-x-hidden">
      <NavBar header={headingTexts[headerIndex]} />
      {/* <h1 className='fixed'>{headingTexts[headerIndex]}</h1> */}
      <div>
      <section className='dmi w-screen h-screen relative '>
          <div>
            <video
              autoPlay
              loop
              muted
              className="absolute left-0 top-0 w-full h-screen -z-[40] object-cover"
            >
              <source src={song} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='absolute inset-0 flex items-start mt-36 justify-center'>
            <h1 style={{ opacity: scrollYProgress }} className='uppercase text-6xl text-white'>SONG PLUS DM-I</h1>
            {/* <h1 >BYD HAN</h1> */}
          </div>

          <div className='absolute bottom-0 ml-[25vw] pb-12' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', minHeight: '30vh' }}>
            <div className='flex  space-x-16'>
              <button className='w-[20vw] rounded-lg text-[30px] text-gray-400 bg-red-600'>Заказать</button>
              <button className='w-[20vw] rounded-lg text-[30px] text-white bg-gray-400'>Узнать Больше</button>
            </div>
          </div>
        </section>
        <section className='dmi w-screen h-screen relative '>
          <div>
            <video
              autoPlay
              loop
              muted
              className="absolute left-0 top-0 w-full h-screen -z-[40] object-cover"
            >
              <source src={bydVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='absolute inset-0 flex items-start mt-36 justify-center'>
            <h1 style={{ opacity: scrollYProgress }} className='uppercase text-6xl text-white'>BYD HAN</h1>
            {/* <h1 >BYD HAN</h1> */}
          </div>

          <div className='absolute bottom-0 ml-[25vw] pb-12' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', minHeight: '30vh' }}>
            <div className='flex  space-x-16'>
              <button className='w-[20vw] rounded-lg text-[30px] text-gray-400 bg-red-600'>Заказать</button>
              <button className='w-[20vw] rounded-lg text-[30px] text-white bg-gray-400'>Узнать Больше</button>
            </div>
          </div>
        </section>


        <section className='dmi relative byd2 w-screen h-screen flex justify-center items-center scroll-snap-align-start'>
          <div className='absolute inset-0 flex items-start mt-36 justify-center '>
            <h1 className=' uppercase text-6xl text-white'>SONG PLUS EV</h1>
          </div>
          <div className='absolute bottom-0  pb-12' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', minHeight: '30vh' }}>
            <div className='flex  space-x-16'>
              <button className='w-[20vw] rounded-lg text-[30px] text-gray-400 bg-red-600'>Заказать</button>
              <button className='w-[20vw] rounded-lg text-[30px] text-white bg-gray-400'>Узнать Больше</button>
            </div>
          </div>
        </section>

        <section className='dmi w-screen h-screen relative '>
          <div>
            <video
              autoPlay
              loop
              muted
              className="absolute left-0 top-0 w-full h-screen -z-[40] object-cover"
            >
              <source src={chazor} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='absolute inset-0 flex items-start mt-36 justify-center'>
            <h1 style={{ opacity: scrollYProgress }} className='uppercase text-6xl text-white'>byd chazor</h1>
            {/* <h1 >BYD HAN</h1> */}
          </div>

          <div className='absolute bottom-0 ml-[25vw] pb-12' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', minHeight: '30vh' }}>
            <div className='flex  space-x-16'>
              <button className='w-[20vw] rounded-lg text-[30px] text-gray-400 bg-red-600'>Заказать</button>
              <button className='w-[20vw] rounded-lg text-[30px] text-white bg-gray-400'>Узнать Больше</button>
            </div>
          </div>
        </section>



        <section className='dmi relative byd4 w-screen h-screen flex justify-center items-center scroll-snap-align-start'>
          <div className='absolute inset-0 flex items-start mt-36 justify-center '>
            <h1 className=' uppercase text-6xl text-white'>станции зарядки</h1>
          </div>
          <div className='absolute bottom-0  pb-12' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', minHeight: '30vh' }}>
            <div className='flex  space-x-16'>
              <button className='w-[20vw] rounded-lg bg-red-600 text-[30px] text-gray-400 '>Заказать</button>
              <button className='w-[20vw] rounded-lg text-[30px] text-white bg-gray-400'>Узнать Больше</button>
            </div>
          </div>
        </section>

        <section className='dmi byd5 w-screen h-screen flex flex-col space-y-16 justify-center items-center'>
          <h3 className=' text-5xl'>Follow BYD Chig'atoy</h3>
          <div className='flex  space-x-20'>
            <div>
              <svg fill="#000000" width="2.857142857142857rem" height="2.857142857142857rem" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                <path d="M228.646,34.7676a11.96514,11.96514,0,0,0-12.21778-2.0752L31.87109,105.19729a11.99915,11.99915,0,0,0,2.03467,22.93457L84,138.15139v61.833a11.8137,11.8137,0,0,0,7.40771,11.08593,12.17148,12.17148,0,0,0,4.66846.94434,11.83219,11.83219,0,0,0,8.40918-3.5459l28.59619-28.59619L175.2749,217.003a11.89844,11.89844,0,0,0,7.88819,3.00195,12.112,12.112,0,0,0,3.72265-.59082,11.89762,11.89762,0,0,0,8.01319-8.73925L232.5127,46.542A11.97177,11.97177,0,0,0,228.646,34.7676ZM32.2749,116.71877a3.86572,3.86572,0,0,1,2.522-4.07617L203.97217,46.18044,87.07227,130.60769,35.47461,120.28811A3.86618,3.86618,0,0,1,32.2749,116.71877Zm66.55322,86.09375A3.99976,3.99976,0,0,1,92,199.9844V143.72048l35.064,30.85669ZM224.71484,44.7549,187.10107,208.88772a4.0003,4.0003,0,0,1-6.5415,2.10937l-86.1543-75.8164,129.66309-93.645A3.80732,3.80732,0,0,1,224.71484,44.7549Z" />
              </svg>
            </div>
            <div>
              <svg width="2.857142857142857rem" height="2.857142857142857rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F" />
                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F" />
              </svg>
            </div>

            <div>
              <svg className='my-auto ' width="2.857142857142857rem" height="2.857142857142857rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F" />
              </svg>
            </div>

            <div>
              <svg fill="#000000" width="2.857142857142857rem" height="2.857142857142857rem" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>youtube</title>
                <path d="M12.932 20.459v-8.917l7.839 4.459zM30.368 8.735c-0.354-1.301-1.354-2.307-2.625-2.663l-0.027-0.006c-3.193-0.406-6.886-0.638-10.634-0.638-0.381 0-0.761 0.002-1.14 0.007l0.058-0.001c-0.322-0.004-0.701-0.007-1.082-0.007-3.748 0-7.443 0.232-11.070 0.681l0.434-0.044c-1.297 0.363-2.297 1.368-2.644 2.643l-0.006 0.026c-0.4 2.109-0.628 4.536-0.628 7.016 0 0.088 0 0.176 0.001 0.263l-0-0.014c-0 0.074-0.001 0.162-0.001 0.25 0 2.48 0.229 4.906 0.666 7.259l-0.038-0.244c0.354 1.301 1.354 2.307 2.625 2.663l0.027 0.006c3.193 0.406 6.886 0.638 10.634 0.638 0.38 0 0.76-0.002 1.14-0.007l-0.058 0.001c0.322 0.004 0.702 0.007 1.082 0.007 3.749 0 7.443-0.232 11.070-0.681l-0.434 0.044c1.298-0.362 2.298-1.368 2.646-2.643l0.006-0.026c0.399-2.109 0.627-4.536 0.627-7.015 0-0.088-0-0.176-0.001-0.263l0 0.013c0-0.074 0.001-0.162 0.001-0.25 0-2.48-0.229-4.906-0.666-7.259l0.038 0.244z"></path>
              </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2.857142857142857rem" height="2.857142857142857rem" class="brandhub-social-media-box-item__icon brandhub-icon"><path fill="currentColor" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path></svg>
            </div>
            <div>
              <svg width="2.857142857142857rem" height="2.857142857142857rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" class="brandhub-social-media-box-item__icon brandhub-social-media-box-item__wb"><path d="M20.354 0H1.622C.727 0 0 .71 0 1.584v18.811c0 .875.727 1.586 1.622 1.586h18.732c.897 0 1.627-.711 1.627-1.586V1.584C21.982.71 21.251 0 20.354 0zM6.519 18.731h-3.26V8.241H6.52v10.49zM4.89 6.807a1.89 1.89 0 110-3.782 1.89 1.89 0 010 3.782zm13.841 11.924h-3.258V13.63c0-1.216-.022-2.781-1.694-2.781-1.696 0-1.957 1.325-1.957 2.693v5.189H8.564V8.241h3.127v1.433h.044c.435-.825 1.499-1.694 3.085-1.694 3.301 0 3.911 2.173 3.911 4.997v5.754z"></path></svg>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
