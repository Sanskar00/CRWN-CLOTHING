import React from 'react';
import './homepage.scss'
import Directory from '../../component/directory/directory';
import { HomePageContainer } from './homepage.style';

const Homepage =()=>(
    <HomePageContainer>
       <Directory />
    </HomePageContainer>
)
export default Homepage;