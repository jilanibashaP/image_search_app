import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
// import Card from './card';


function App() {
  const [dataArray, setDataArray] = useState([])
  const [bookName, setBookName] = useState("")
  // const [search, setSearch] = useState([])
  const [arr, setArr] = useState(0)
  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=%7BbookTitle").then((res) => {
      return res.json()
    }).then((data) => {
      let array = data.items
      setDataArray(array)
    }).catch((e) => {
      console.log(e)
    })
  }, [])

  const bookHandler = (e) => {
    setBookName(e.target.value)
    console.log(dataArray)
  }

  const handleClick = (e) => {
    setArr(arr + 1);
    let searchBook = e.target;
    console.log(bookName);
  }
  return (
    <>
      <h1 className='title'>BOOK SEARCH </h1>
      <div>
        {/* <Card></Card> */}
        <input type="search" className='search' placeholder='search for a book' onChange={bookHandler} />
        <img src='./search.png' className='searchImage' onClick={handleClick} />
      </div>
      <div>count :-{arr}</div>

      <div>
        {
          bookName.length ? (
            <div>{
              dataArray.map((item, index) => {
                return (
                  <div key={item.volumeInfo.title}>
                    <a href={item.volumeInfo.infoLink}>
                      <img src={item.volumeInfo.imageLinks.smallThumbnail} alt='image'></img>
                    </a>
                  </div>)
              })}
            </div>) : (null)}
      </div>
    </>
  );
            }
  export default App;
