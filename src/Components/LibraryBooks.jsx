import React from 'react'
import LibraryCard from './LibraryCards'

function LibraryBooks() {
    const books = [
        { code: "WEB 001", name: "Full Stack Development", price: "90" },
        { code: "SENG 001", name: "Software Development", price: "100" },
        { code: "SENG 002", name: "Software Engineering", price: "50" },

    ]

    
        const NumberBooks = books.length
        const totalBooks = books.reduce((total, book) => total + Number(book.price), 0)


  return (
    <div>
        <h2>List of books</h2>
        <div style={{display:"vertical", flexWrap:"wrap", alignItems:"center"}}>
            {
                books.map(book => <LibraryCard key={book.code} bookInfo={book}/>)
            }
        </div>
        <p>The total price of {NumberBooks} books is: ${totalBooks}</p>
    </div>
  )
}

export default LibraryBooks