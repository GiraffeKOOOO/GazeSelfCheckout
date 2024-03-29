import apple from '../media/apple.png';
import banana from '../media/banana.png';
import watermelon from '../media/watermelon.png';
import carrot from '../media/carrot.png';
import parsnip from '../media/parsnip.png';
import bread from '../media/bread.png';

const ProductData = {
    products: [
        {
            name: 'banana',
            price: 0.60,
            category: 'Fruit',
            image: banana,
        },
        {
            name: 'apple',
            price: 0.80,
            category: 'Fruit',
            image: apple,
        },
        {
            name: 'watermelon',
            price: 1.00,
            category: 'Fruit',
            image: watermelon,
        },
        {
            name: 'carrot',
            price: 0.40,
            category: 'Vegetables',
            image: carrot,
        },
        {
            name: 'parsnip',
            price: 0.35,
            category: 'Vegetables',
            image: parsnip,
        },
        {
            name: 'bread',
            price: 0.75,
            category: 'Bakery',
            image: bread,
        },
    ]
};
export default ProductData;