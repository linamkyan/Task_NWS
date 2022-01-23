import { default as React } from 'react';
import './style.css';
import GetingData from '../GetingData/index';

export const AllCategories = (props) => {
  console.log(props);
  return (
    <div className='allBox'>
      <div className='container'>
        <div className='allContent'>
          <GetingData data={props.data}></GetingData>
        </div>
      </div>
    </div>
  );
};
