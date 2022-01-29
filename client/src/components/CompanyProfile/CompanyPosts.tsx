import React from 'react';
import { useSelector } from 'react-redux';
import PostsContainer from '../PostsContainer';
import { MainDiv } from './Styles';

export const CompanyPosts = () => {
    const companyId = useSelector((state: any)=> state.companyReducer.companyDetail.id)
    return <MainDiv>
        <PostsContainer companyId={companyId}/>
            </MainDiv>;
};
