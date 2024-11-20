
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookMarks, setBookMark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  
  const handleAddToBookMark = blog =>{
    const newBookMarks = [...bookMarks,blog]
    setBookMark(newBookMarks)
  }

  const handleMarkedAsRead = (id, time) =>{
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime);

    const remainingBookMark = bookMarks.filter(bookmark => bookmark.id !== id);
    setBookMark(remainingBookMark)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex  max-w-7xl mx-auto'>
      <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkedAsRead= {handleMarkedAsRead}></Blogs>
      <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>

      </div>
      
    </>
  )
}

export default App
