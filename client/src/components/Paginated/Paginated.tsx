import styled from "styled-components";
import { FC } from "react";

interface Props {
    PostsPerPage: number;
    AllPostsLength: number;
    paginado:any;
  }

const Paginated: FC<Props> = ({PostsPerPage, AllPostsLength, paginado}) => {

    const numbers=[]

    for (let index = 1; index <= Math.ceil(AllPostsLength/PostsPerPage); index++) {
        numbers.push(index);
    }

    return (
    <div>
        {numbers?.map(n =>(
                    <button key={n} onClick={()=> paginado(n)}>
                        <a>{n}</a> 
                    </button>
                ))}
    </div>
    )}

export default Paginated