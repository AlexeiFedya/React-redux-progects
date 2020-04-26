import React from 'react';
import { connect } from 'react-redux';


import BookListItem from '../book-list-item/book-list-item'
import withBookstoreService from '../hoc/with-bookstore-service'
import { fetchBooks, bookAddedToCart } from '../../actions/actions'
import compose from '../../utils/compose'
import Loader from '../loader/loader'
import ErrorIndicator from '../error-indicator/error-indicator'

import './book-list.css'

const BookList = ({books, onAddedToCart}) => {
    return(
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem book={book} onAddedToCart={()=> onAddedToCart(book.id)}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}

class BookListContainer  extends React.Component {

    componentDidMount () {
        this.props.fetchBooks();
    }

    // componentDidMount () {
    //     //1 receive data (получить данные)
    //     const { bookstoreService,
    //             booksLoaded,
    //             booksReuested,
    //             booksError} = this.props
    //     booksReuested() // loading 
    //     bookstoreService.getBooks()
    //         .then((data) => {
    //             booksLoaded(data)
    //         })
    //         .catch((err) => booksError(err))


    //     // 2 передать действия в стор
    //     // this.props.booksLoaded(data);
    // }

    render() {

        const {books, loading, error, onAddedToCart} = this.props

        if (loading) {
            return <Loader/>
        }
        if (error) {
            return <ErrorIndicator/>
        }

        return (
            <BookList books={books} onAddedToCart={onAddedToCart}/>
        )
    }
}

const mapStateToProps = ({bookList}) => {
    return {
        books: bookList.books,
        loading: bookList.loading,
        error: bookList.error
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>  {
        const {bookstoreService} = ownProps
        return {
            fetchBooks: fetchBooks(bookstoreService, dispatch),
            onAddedToCart: (id) => dispatch(bookAddedToCart(id))
        }
    }

// const mapDispatchToProps = { // redux обернет booksLoaded в bindActionCreators и как только наш компонент будет вызывыть функция booksLoaded будет не только создаваться новое дейстие но оно будет сразу передоваться в dispatch и сразу же попадать в наш стор
//     booksLoaded,
//     booksReuested,
//     booksError
// }
// const mapDispatchToProps = (dispatch) => {
//     return (
//         bindActionCreators ({
//             booksLoaded
//         }, dispatch)
//     )
// }

// export default withBookstoreService()(
//     connect(mapStateToProps, mapDispatchToProps) (BookList));

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    ) (BookListContainer);