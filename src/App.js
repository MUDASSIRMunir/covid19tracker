import React,{useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';

import { Cards, Chart, Countrypicker } from './components';
import  styles from './App.module.css';
import { fetchData } from './api';

async function displaydata(){
  
    
  const datafetched = await fetchData();
   //console.log("data=",data);
 // return datafetched;
 
   
  
 }

 


 
function App() {
  
 
  
 
  //datafetched();
  //setData({data:{datafetched}})
  //setData({data:datafetched})
 //displaydata();
  
   
 
 
 
  return (
    <div className={styles.container}>
          <Cards />
          <Countrypicker />
          <Chart />
         
    </div>
  );
}

export default App;
