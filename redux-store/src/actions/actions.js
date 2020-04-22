const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

const booksReuested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

const booksAddedToCart = (bookId)=> {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksReuested()) 
    bookstoreService.getBooks()
        .then((data) => {
            dispatch(booksLoaded(data))
        })
        .catch((err) => dispatch(booksError(err)))
}

export {
    fetchBooks,
    booksAddedToCart
}