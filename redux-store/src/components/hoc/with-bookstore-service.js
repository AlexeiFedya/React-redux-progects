import React from 'react';
import { BooksstoreServiceConsumer } from '../bookstore-services-context/bookstore-service-context'

const withBookstoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <BooksstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return (
                            <Wrapped {...props} 
                                    bookstoreService = {bookstoreService} />
                        )
                    }
                }
            </BooksstoreServiceConsumer>
        )
    }
}

export default withBookstoreService