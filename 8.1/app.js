const book= {bookname:"Sapiens: A Brief History of Humankind",author:"Yuval Noah Harari",Publication_year:"2011",Genre:'Nonfiction'};

function book_description(book){
    let output ="the book " + book.bookname + "was written by "+ book.author +" in the year "+ book.Publication_year;
    console.log(output);
}

book_description(book);
