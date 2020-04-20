 export default class BookstoreService {

    getBooks(){
        return [
            {   id:1, 
                title: 'Kinder Joy Chocolates For Girls, 24 Pieces',
                author: 'Ferrero',
                price: 24,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/61xHZArjwUL._SL1101_.jpg'},

            {   id:2, 
                title: 'Kinder Country Delicious Candy Bar',
                author: 'Ferrero',
                price: 42,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/61aVWpWHuYL._SL1024_.jpg'}
        ];
    }

 }