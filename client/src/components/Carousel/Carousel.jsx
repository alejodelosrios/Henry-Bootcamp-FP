import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import userReducer from "../../redux/reducers/userReducer";
import "./carousel.css";
import imagen1 from './imagen1.jpg'
import imagen2 from './imagen2.jpg'
import imagen3 from './imagen3.jpg'
import imagen4 from './imagen4.png'
import imagen5 from './imagen5.jpg'
import scrollArrow from './scroll-arrow.png'

export default function Carousel() {

  const images = useSelector((state) => state.userReducer.company.images)

  // const [data, setData] = useState([]);
  const carousel = useRef(null);

  // useEffect(() => {
  //   fetch('https://transforma-server-u5det.ondigitalocean.app/api/v2/company/')
  //     .then((response) => response.json())
  //     .then(setData);
  // }, []);

  // useEffect(() => {
  //   setData([{
  //     id: 1,
  //     name: 'imagen1',
  //     image: imagen1
  //   },
  //   {
  //     id: 2,
  //     name: 'imagen2',
  //     image: imagen2
  //     },
  //     {
  //       id: 3,
  //       name: 'imagen3',
  //       image: imagen3
  //     },
  //     {
  //       id: 4,
  //       name: 'imagen4',
  //       image: imagen4
  //     },
  //     {
  //       id: 5,
  //       name: 'imagen5',
  //       image: imagen5
  //     }])
  // }, [])

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!images || !images.length) return null;

  return (
    <div className="container">
        <div className="carousel" ref={carousel}>
          {images.map((item) => {
            const { id, name, image } = item;
            return (
              <div className="item" key={id}>
                <div className="image">
                  <img src={image} alt={name} />
                </div>
              </div>
            );
          })}
      </div>
      <div className="fade">        
      </div>
      <div className="fade2">        
      </div>
        <div className="buttons">
          <button onClick={handleLeftClick}>
            <img
              src={scrollArrow}
              alt="Scroll Left"
              />
          </button>
          <button onClick={handleRightClick}>
            <img
              src={scrollArrow}
              alt="Scroll Right"
              />
          </button>
        </div>
    </div>
  );
}
