import { faker } from '@faker-js/faker';

interface Product {
    name: string;
    mrp: string;
    brand: string;
    rating: number;
    image: string;
}

function generateProduct(): Product {
    const name = faker.commerce.productName();
    const mrp = faker.commerce.price({ min: 100 })
    const brand = faker.company.name();
    const rating = faker.number.int({ min: 1, max: 5 });
    const image = faker.image.urlLoremFlickr({ category: 'fashion' })

    const product: Product = {
        name,
        mrp,
        brand,
        rating,
        image,
    };

    return product;
}


export default generateProduct