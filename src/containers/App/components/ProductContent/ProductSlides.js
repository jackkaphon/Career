import React, { useRef, useState } from 'react'
import './Product.css'

const ProductSlides = ({ images }) => {
  const carousel = useRef();
  const [count, setCount] = useState(0);


  const incrementCarousal =(delta) => {
    if(carousel.current){
      const width = carousel.current.offsetWidth;
      carousel.current.scrollTo(carousel.current.scrollLeft + width * delta , 0)
      
      // setCount(values)
    
    }

  }
  return (<>
    <div className="columns">
      <div className="column col-lg-12 col-md-12 col-sm-12  ">
        <div className="carousel-container">
          <div className='carousel-btn left-btn' onClick={() => incrementCarousal(-1)}/>
          <div className='carousel-btn right-btn' onClick={() => incrementCarousal(1)}/>
        <div className='carousel' ref={carousel}>
            {images.map((img, idx) => (<div className='carousel-item'>
                <img src={img.src} alt='Our product' key={`${idx}`} />
                {/* <p>{img.title}</p> */}
            </div>))}
        </div>
        
        </div>
        
      </div> 
     
    </div>
    
    </>
  )
}

export default ProductSlides
