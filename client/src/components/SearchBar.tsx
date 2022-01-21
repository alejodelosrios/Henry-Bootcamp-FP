import styled from 'styled-components';
import { FC } from 'react';
import {useState} from 'react'
import { useDispatch } from "react-redux";

interface Search {
  postulacion?: string | undefined,
  localizacion?: string | undefined
}

const SearchBar=() => {
    const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: red;
  color: black;
  border: 2px solid white;`
  const dispatch = useDispatch()
  const [search, setSearch]= useState<Search>()

  const handleChange= (e:any)=>{
    e.preventDefault()
    setSearch({
      ...search,  
      [e.target.name]: e.target.value,
  })
  }

  const handleClick=(e:any)=>{
    e.preventDefault()
    //dispatch(getPosts(search))
    setSearch({
    postulacion: '',
    localizacion: ''})
  }

    return (
      <div>
        <input type='text' name='postulacion' placeholder='Ingrese palabra clave' onChange={handleChange} value={search?.postulacion}/>
        <input type='text' name='localizacion' placeholder='Ingrese la Ciudad' onChange={handleChange} value={search?.localizacion}/>
        <Button onClick={handleClick}>Buscar</Button>
      </div>
    )
}

export default SearchBar
