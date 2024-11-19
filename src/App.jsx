
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookMarks, setBookMark] = useState([]);
  
  const handleAddToBookMark = blog =>{
    const newBookMarks = [...bookMarks,blog]
    setBookMark(newBookMarks)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex  max-w-7xl mx-auto'>
      <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
      <Bookmarks bookMarks={bookMarks}></Bookmarks>

      </div>
      
    </>
  )
}

export default App
