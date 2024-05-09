// const wrapper = document.getElementById("wrapper");
// console.log(wrapper)

// const title = document.getElementsByClassName("title");
// console.log(title)

// console.log(Array.isArray(Array.from(title)))

// let head = document.getElementsByTagName("header");
// console.log(head)

// const bookList = document.querySelectorAll("#book-list ul li .name")
// console.log(bookList);
// bookList.forEach((book) =>{
//     book.textContent += "(test)";
    //console.log(book.textContent)
//})
// console.log(bookList[1].innerHTML);
// bookList.forEach((book) => {
//     console.log(book.textContent)
// })
// console.log(bookList)
// console.log(Array.isArray(bookList))

// const addBook = document.querySelector('#add-book');
// console.log(addBook.previousElementSibling);  
// console.log(addBook.previousSibling)


const bookList = document.querySelector("#book-list ul")
//console.log(bookList)
bookList.addEventListener('click', (e)=>{
    console.log(e)
    let className = e.target.className
    if(className == "delete"){
        let li = e.target.parentElement
        bookList.removeChild(li)
    }


})

const searchBook = document.forms["search-books"];
const listOfBooks = document.querySelectorAll("#book-list li .name")

searchBook.addEventListener('keyup', function (e) {
    let inputText = e.target.value.toLowerCase()

    listOfBooks.forEach((book) => {
        let title = book.textContent.toLowerCase()
        let isIncludeInputText =  title.includes(inputText)
        let parentNode = book.parentNode

     if(isIncludeInputText){
        parentNode.style.display = 'block'
     } else {
        parentNode.style.display = 'none';

        }
    })
})

const addBook = document.forms["add-book"];

addBook.addEventListener("submit", (e) =>{
e.preventDefault();

const inputValue = addBook.querySelector("input").value.trim();

if(inputValue){
    const liTag = document.createElement("li");
const firstSpan = document.createElement("span");
const secondSpan = document.createElement("span")

firstSpan.classList = 'name';
secondSpan.classList = 'delete';

liTag.appendChild(firstSpan);
liTag.appendChild(secondSpan);

firstSpan.textContent = inputValue;
secondSpan.textContent = "delete";

bookList.prepend(liTag);

addBook.reset();

}

})
