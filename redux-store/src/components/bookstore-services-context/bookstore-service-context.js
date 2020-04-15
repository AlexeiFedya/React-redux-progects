import React from 'react';

const {
    Provider: BookstoreServiceProvider,
    Consumer: BooksstoreServiceConsumer
} = React.createContext()

export {
    BookstoreServiceProvider,
    BooksstoreServiceConsumer
};