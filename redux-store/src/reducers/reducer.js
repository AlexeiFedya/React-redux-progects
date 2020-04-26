import updateBookList from './bookList'
import updateShoppingCart from './shoppingCart'


const reducer = (state , action) => {

    console.log(action.type)

    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
}

export default reducer;            
        // case 'FETCH_BOOKS_REQUEST':
        //     return {
        //         ...state, // copy this current state and change other  
        //         books: [],
        //         loading: true,
        //         error: null
        //     };
        // case 'FETCH_BOOKS_SUCCESS':
        //     return {
        //         ...state,
        //         books: action.payload,
        //         loading: false,
        //         error: null
        //     };

        // case 'FETCH_BOOKS_FAILURE':
        //     return {
        //         ...state,
        //         books: [],
        //         loading: false,
        //         error: action.payload
        //     }  

        // case'BOOK_ADDED_TO_CART':
        // return  (
        //     updateOrder(state, action.payload, 1)
        // )
        
            // const bookId = action.payload;
            // const book = state.books.find((book) => book.id === bookId);
            // const itemIndex = state.cartItems.findIndex((book) => book.id === bookId)
            // const item = state.cartItems[itemIndex]
            
            // const newItem =  updateCartItem (book, item)
            
            //     return {
            //         ...state,
            //         cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
            //     }

        // case'BOOK_REMOVED_FROM_CART':
        // return (
        //     updateOrder(state, action.payload, -1)
        // )

        
        // case'ALL_BOOKS_REMOVED_FROM_CART':
        // const item = state.cartItems.find((book) => book.id === action.payload)
        // return (
        //     updateOrder(state, action.payload, -item.count)
        // )
