import React, { useState, useEffect } from 'react';
import { MainPage } from '../src/components/MainPage/index';
import './App.css';
import { Boxes } from '../src/components/Boxes';
import { Clothes } from '../src/components/Clothes';
import { Hats } from '../src/components/Hats';
import { BrowserRouter as Routes, Route } from "react-router-dom";
import { Header } from '../src/components/Header'
import { SideBar } from '../src/components/SideBar';
import axios from "axios";

function App() {
  const [boxes, setBoxes] = useState([]);
  const [data, setData] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get('https://api.thecatapi.com/v1/images/search?limit=100&page=1&category_ids:');
        console.log(resp);
        let categories = resp.data.filter(item => item.hasOwnProperty('categories'));
        setBoxes(categories.filter(f => f.categories[0].name === 'boxes'))
        setData(resp.data);
  
      }
      catch (err) {
        throw new Error(err);
      }
    };

    fetchData();
  }, []);

  return (

    <Routes>
      <Header></Header>

      <div className="main_content">
        <SideBar></SideBar>
        <Route exact path='/'>
          <MainPage data={data}/>
        </Route>
        <Route path="/categories" component={MainPage}>
          <Route exact path="/categories/boxes" render={()=><Boxes data={boxes}/>} />
          <Route exact path="/categories/clothes" component={Clothes} />
          <Route exact path="/categories/hats" component={Hats} />
        </Route>
      </div>
    </Routes >
  );
}

export default App;
