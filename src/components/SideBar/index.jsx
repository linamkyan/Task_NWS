import React, { useState, useEffect } from "react";
import axios from "axios";
import './style.css';
import { BrowserRouter as Link, NavLink} from 'react-router-dom';

export const SideBar = () => {

  const [data, setData] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const [result, setResult] = useState("");
  const [itemsToShow, setItemsToShow] = useState(7);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const resp = await axios.get('https://api.thecatapi.com/v1/categories');
              setData(resp.data);
              setSearchFilter(resp.data);
          }
          catch (err) {
              throw new Error(err);
          }
      };
      fetchData();
  }, []);

  useEffect(() => {
      const results = searchFilter.filter(resp =>
          resp.name.toLowerCase().includes(result)
      );
      setData(results)
  }, [result])
  //console.log(data);

  return (
    <div className='sidebarBox'>
      <div className='container'>
        <div className='sidebarContent'>
        <div className='navigationSide'>
        <ul className='linksSide'>
              <NavLink className='all_link'
                  to='/'
               >All</NavLink>
                {data.slice(0, itemsToShow).map((r, i) => (
                    <li key={r.id}>      
                      <NavLink
                        to={`/categories/${r.name}`}
                      >{r.name}</NavLink>           
                    </li>
                  )
                )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
