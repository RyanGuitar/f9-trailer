import Image from 'next/image'
import { bgWrap, bgText } from '../styles/styles.module.css'
import { useState, useEffect } from 'react';


export default function Background() {
  const size = useWindowSize();

  return (
    
    <div>
    {size.width > size.height? 
    <div className={bgWrap}>
      <Image
        alt="F9 landscape"
        src="/images/landscape.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    :
    <div className={bgWrap}>
      <Image
        alt="F9 landscape"
        src="/images/portrait2.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    }
  </div>
  )
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {

      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
        
     }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); 
  return windowSize;
}