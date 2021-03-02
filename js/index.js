document.addEventListener("DOMContentLoaded", function() {

    const booksURL = 'http://localhost:3000/books'
    getAllBooks()

    function getAllBooks(){
        fetch(booksURL)
        .then(res => res.json())
        .then(books => books.forEach(book => renderBooks(book)))
    }

    function patchBook(book) {
        fetch(`http://localhost:3000/books/${book.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                //need to put users in body 
            })
        })
        .then(res => res.json())
        .then(book => {
            renderBooks(book)
        })
    }

//iterate through users to get to username?
    function renderBooks(book){
        let divList = document.getElementById('list-panel')
        let ul = document.getElementById('list')
        let liList = document.createElement('li')
        // console.log(book.users)
        liList.textContent = book.title
        divList.append(ul, liList)
        // console.log(book)
        liList.addEventListener('click', () => {
        let divShow = document.getElementById('show-panel')
        let title = document.createElement('h2')
        let author = document.createElement('h2')
        let subtitle = document.createElement('h2')
        let p = document.createElement('p')
        let ul = document.createElement('ul')
        let li = document.createElement('li')
        let image = document.createElement('img')
        let likeBtn = document.createElement('button')

        title.innerText = book.title
        author.innerText = book.author
        subtitle.innerText = book.subtitle
        image.src = book.img_url
        li.innerText = book.users.username
        li.id = book.id
        p.textContent = book.description
        likeBtn.textContent = 'LIKE'

        divShow.append(title, author, subtitle, p, ul, image, likeBtn)
        ul.appendChild(li)
        })
    }
        
// scope not right for likeBtn 
// when button is clicked username appends to DOM
// button switches innerText 

    likeBtn.addEventListener("click", likingBooks)
    function likingBooks() {
        // let likeBtn = document.get('button')
            if (likeBtn.innerText === 'LIKE') {
                likeBtn.innerText = 'UNLIKE'
            } else {
                likeBtn.innerText === 'LIKE'
            }
    }


});


// document.addEventListener("DOMContentLoaded", function() {
//     fetchBooks()
// });
// // get books
// function fetchBooks() {
//     fetch('http://localhost:3000/books')
//         .then(resp => resp.json())
//         .then(books => {
//             books.forEach(book => {
//                 rendersBook(book)
//             })
//         })
// }
// // dom minipulation rendering a book
// function rendersBook(book) {
//     const li = document.createElement('li')
//     const list = document.getElementById('list')
//     li.textContent = book.title
//     li.addEventListener('click', () => showBook(book))
//     list.appendChild(li)
// }
// // event for showing book that was clicked
// function showBook(book) {
//     const showPanel = document.getElementById('show-panel')
//     showPanel.innerHTML = ""
//     const img = document.createElement('img')
//     const title = document.createElement('h5')
//     const subtitle = document.createElement('h5')
//     const author = document.createElement('h5')
//     const desc = document.createElement('p')
//     const ul = document.createElement('ul')
//     const likeBtn = document.createElement('button')
//     img.src = book.img_url
//     title.textContent = book.title
//     subtitle.textContent = book.subtitle
//     author.textContent = book.author
//     desc.textContent = book.description
//     book.users.forEach(user => {
//         const li = document.createElement('li')
//         li.textContent = user.username
//         ul.appendChild(li)
//     })
//     if (userLiked(book)){
//         likeBtn.innerText = 'UNLIKE'
//     }else {
//         likeBtn.innerText = 'LIKE'
//     }
//     likeBtn.addEventListener('click', () => likeBook(book, likeBtn))
//     showPanel.append(img, title, subtitle, author, desc, ul, likeBtn)
// }
// // check if user has liked the book already
// function userLiked(book) {
//     // debugger
//     return book.users.find( ({ username }) => username === 'pouros' );
// }
// // event for liking a book
// function likeBook(book, likeBtn) {
//     if (likeBtn.innerText === 'LIKE') {
//         likeBtn.innerText = 'UNLIKE'
//         fetch(`http://localhost:3000/books/${book.id}`, {
//             method: 'PATCH', 
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept' : 'application/json'
//             },
//             body: JSON.stringify({users: [...book.users, {"id": 1, "username": 'pouros'}]})
//         })
//         .then(resp => resp.json())
//         .then(book => showBook(book))
//     }else {
//         likeBtn.innerText = 'LIKE'
//         let index = book.users.indexOf({'id':'1', 'username': 'pouros'})
//         book.users.splice(book.users.length + index, 1)
//         fetch(`http://localhost:3000/books/${book.id}`, {
//             method: 'PATCH', 
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept' : 'application/json'
//             },
//             body: JSON.stringify({users: book.users})
//         })
//         .then(resp => resp.json())
//         .then(book => showBook(book))
//     }
// }