import React from 'react';
import { connect } from 'react-redux';


import BookListItem from '../book-list-item/book-list-item'
import withBookstoreService from '../hoc/with-bookstore-service'
import {booksLoaded, booksReuested, booksError} from '../../actions/actions'
import compose from '../../utils/compose'
import Loader from '../loader/loader'
import ErrorIndicator from '../error-indicator/error-indicator'

import './book-list.css'

class BookList  extends React.Component {

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

        const {books, loading, error} = this.props

        if (loading) {
            return <Loader/>
        }
        if (error) {
            return <ErrorIndicator/>
        }

        return(
            <ul className="book-list">
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}>
                                <BookListItem book={book} />
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>  {
        const {bookstoreService} = ownProps
        return {
            fetchBooks: () => {
                dispatch(booksReuested()) // loading 
                bookstoreService.getBooks()
                    .then((data) => {
                        dispatch(booksLoaded(data))
                    })
                    .catch((err) => dispatch(booksError(err)))
            }
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
    ) (BookList);