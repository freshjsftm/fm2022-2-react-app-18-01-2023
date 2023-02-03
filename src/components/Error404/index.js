import React from 'react';
import { useNavigate } from "react-router-dom";
import ImageWrapper from '../ImageWrapper';

const Error404 = () => {
  const navigate = useNavigate();
  setTimeout(()=>{navigate('/', {replace:true})},2000);
  return (
    <ImageWrapper width='100%'>
      <img src="images/404-error-1560x760.png" alt="error 404"/>
    </ImageWrapper>   
  );
}

export default Error404;
