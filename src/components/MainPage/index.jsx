import React from 'react';
import { AllCategories } from '../AllCategories';

import './style.css';


export const MainPage = (props) => {
  return (
    <div className='App'>
        <AllCategories data={props.data}></AllCategories>
    </div>
  );
};
