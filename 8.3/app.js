const book1= {bookname:"Sapiens: A Brief History of Humankind",author:"Yuval Noah Harari",year:"2011"};
const book2={bookname:'Angels and Demons',author:'Dan Brown',year:'2000'};
var bookUtils = new Object();
func1 = function(book1,book2){
    if(book1.year < book2.year){
        return book1;
    }
    return book2;
}
bookUtils.getFirstPublished=func1;

func2 =function(book,edition_year){
    book.latestEdition = edition_year;
}
bookUtils.setNewEdition=func2;

func3 =function(book,language){
    book.language = language;
}
bookUtils.setLanguage=func3;

func4 =function(book,language,translator){
    let ob={language:translator};
    book.translation=ob;
}
bookUtils.setTranslation=func4;

func5 = function(book,name,location){
    let obj={name:location};
    book.publisher=obj;
}
bookUtils.setPublisher=func5;

func5 = function(book1,book2){
    if(book1.name == book2.name){
        if(book1.name.location == book2.name.location){
            return true;
        }
    }
    return false;
}

bookUtils.isSamePublisher=func5;





