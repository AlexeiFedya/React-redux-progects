import React from 'react';
import { connect } from 'react-redux';


import BookListItem from '../book-list-item/book-list-item'
import withBookstoreService from '../hoc/with-bookstore-service'
import {booksLoaded} from '../../actions/actions'
import compose from '../../utils/compose'

import './book-list.css'

class BookList  extends React.Component {

    componentDidMount () {
        //1 receive data (получить данные)
        // const { bookstoreService} = this.props
        const data = this.props.bookstoreService.getBooks()
        console.log(data)

        // 2 передать действия в стор
        this.props.booksLoaded(data);
    }

    render() {

        const {books} = this.props

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
        books: state.books
    }
}

const mapDispatchToProps = { // redux обернет booksLoaded в bindActionCreators и как только наш компонент будет вызывыть функция booksLoaded будет не только создаваться новое дейстие но оно будет сразу передоваться в dispatch и сразу же попадать в наш стор
    booksLoaded
}
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