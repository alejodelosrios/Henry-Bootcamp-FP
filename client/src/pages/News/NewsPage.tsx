import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { News } from '../../components/News';
import HomeLayout from '../HomeLayout';
import Storage from "../../services/storage";

export const NewsPage = () => {
    const token = Storage.get("token");
    const [news, setNews] = useState<any>([])
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        axios.get(`${process.env.REACT_APP_API}/news/index`,
    {
        headers: {
            token: token || "",
        },
    })
        .then((res)=>{
            setNews(res.data)
            setLoading(false)
        })
    },[])
  if (loading) {
      return (
          <HomeLayout>
              <div><h1 style={{textAlign: 'center'}}>Cargando...</h1></div>
          </HomeLayout>
      )
  } else {
    return (
        <HomeLayout>
            <div>
            {news.length === 0 ? <div><h1 style={{textAlign: 'center'}}>Aún no hay posts disponibles...</h1></div> : <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>{news.map((news: any) => (
                <News
                title={news.title}
                description={news.description}
                image={news.image}
                />
            ))}</div>}
                </div> 
        </HomeLayout>
    )
  }
}