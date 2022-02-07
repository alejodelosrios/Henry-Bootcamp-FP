import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const RatingGraph = () => {
  const company = useSelector(
    (state: any) => state.companyReducer.companyDetail.reviews
  );
  const [stars1, setStars1] = useState<any>([]);
  const [stars2, setStars2] = useState<any>([]);
  const [stars3, setStars3] = useState<any>([]);
  const [stars4, setStars4] = useState<any>([]);
  const [stars5, setStars5] = useState<any>([]);
  useEffect(() => {
    for (let i = 0; i < company.length; i++) {
      switch (company[i].score) {
        case 5:
          setStars5((oldArray: any) => [...oldArray, company[i].score]);
          break;
        case 4:
          setStars4((oldArray: any) => [...oldArray, company[i].score]);
          break;
        case 3:
          setStars3((oldArray: any) => [...oldArray, company[i].score]);
          break;
        case 2:
          setStars2((oldArray: any) => [...oldArray, company[i].score]);
          break;
        case 1:
          setStars1((oldArray: any) => [...oldArray, company[i].score]);
          break;
        default:
          console.log("default");
          break;
      }
    }
  }, []);

  return (
    <div>
      <div style={{display: 'flex', alignItems: 'center', margin: '15px 0'}}>
        <span style={{ color: "#c879ff", fontSize: "25px" }}>★ 5</span> 
        <div
        className="5star-bar"
        style={{
          background: "#c879ff",
          display: "block",
          height: "30px",
          borderRadius: "7px",
          overflow: "hidden",
          width: `${(stars5.length * 100) / company.length}%`,
          margin: '0 15px'
        }}
      >
      </div>        
        <p style={{color: '#7a7380', fontSize: '25px'}}>{Math.round((stars5.length * 100) / company.length)}%</p>
      </div>

      <div style={{display: 'flex', alignItems: 'center', margin: '15px 0'}}>
        <span style={{ color: "#ef5da8", fontSize: "25px" }}>★ 4</span> 
        <div
        className="4star-bar"
        style={{
          background: "#ef5da8",
          display: "block",
          height: "30px",
          borderRadius: "7px",
          overflow: "hidden",
          width: `${(stars4.length * 100) / company.length}%`,
          margin: '0 15px'
        }}
      >
      </div>        
        <p style={{color: '#7a7380', fontSize: '25px'}}>{Math.round((stars4.length * 100) / company.length)}%</p>
      </div>

      <div style={{display: 'flex', alignItems: 'center', margin: '15px 0'}}>
        <span style={{ color: "#fa93c7", fontSize: "25px" }}>★ 3</span> 
        <div
        className="3star-bar"
        style={{
          background: "#fa93c7",
          display: "block",
          height: "30px",
          borderRadius: "7px",
          overflow: "hidden",
          width: `${(stars3.length * 100) / company.length}%`,
          margin: '0 15px'
        }}
      >
      </div>        
        <p style={{color: '#7a7380', fontSize: '25px'}}>{Math.round((stars3.length * 100) / company.length)}%</p>
      </div>

      <div style={{display: 'flex', alignItems: 'center', margin: '15px 0'}}>
        <span style={{ color: "#daa3be", fontSize: "25px" }}>★ 2</span> 
        <div
        className="2star-bar"
        style={{
          background: "#daa3be",
          display: "block",
          height: "30px",
          borderRadius: "7px",
          overflow: "hidden",
          width: `${(stars2.length * 100) / company.length}%`,
          margin: '0 15px'
        }}
      >
      </div>        
        <p style={{color: '#7a7380', fontSize: '25px'}}>{Math.round((stars2.length * 100) / company.length)}%</p>
      </div>

      <div style={{display: 'flex', alignItems: 'center', margin: '15px 0'}}>
        <span style={{ color: "#c5a8b7", fontSize: "25px" }}>★ 1</span> 
        <div
        className="1star-bar"
        style={{
          background: "#c5a8b7",
          display: "block",
          height: "30px",
          borderRadius: "7px",
          overflow: "hidden",
          width: `${(stars1.length * 100) / company.length}%`,
          margin: '0 15px'
        }}
      >
      </div>        
        <p style={{color: '#7a7380', fontSize: '25px'}}>{Math.round((stars1.length * 100) / company.length)}%</p>
      </div>
    </div>
  );
};
