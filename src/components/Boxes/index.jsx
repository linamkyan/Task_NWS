import { default as React } from 'react';
import GetingData from '../GetingData/index';
import './style.css';

export const Boxes = (props) => {
  return (
    <div className='allBox'>
        <div className='allContent'>
           <GetingData data={props.data}></GetingData>
        </div>
    </div>
  );
};
