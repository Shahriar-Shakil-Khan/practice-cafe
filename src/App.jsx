
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Navbar from './Component/Navbar/Navbar'

function App() {
  const [bookMarked,setBookMarked]=useState([]);
  const [readingCount,setReadingCount]=useState(0);

 const handleBookMark=(blog)=>{
    setBookMarked([...bookMarked,blog])
 } 

 const handleMarkAsRead=(time)=>{
     setReadingCount(readingCount+time)
 }
  
console.log()
  return (
    <>
  
      <Navbar></Navbar>
      <div className="main-container flex text-center">

          <div className="left-container w-[70%]">
           <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          </div>

          <div className="right-container w-[30%]">
            <h1>Reading Time :{readingCount}</h1>
            <h1>Bookmarked Count : {bookMarked.length}</h1>
              <div className=' rounded-2xl bg-amber-500 text-white'>
                {
                bookMarked.map((marked)=><p>{marked.title}</p>)
                }
              </div>
          </div>

      </div>
      
    </>
  )
}

export default App
