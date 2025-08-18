const faker = require('faker');
const fs = require('fs');
faker.locale = "vi";
const randomUserList = (n) => {
    const userList = [];
    if (n <= 0) return [];

    Array.from(new Array(n)).forEach(() => {
        const user = {
            id: faker.random.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            fullname: `${faker.name.lastName()} ${faker.name.firstName()}`,
            avatar: faker.image.avatar(400, 400),
        };
        userList.push(user);
    });

    return userList;
};

const randomProductList = (n, categoryList) => {
    const productList = [];
    if (n <= 0) return [];

    for (let i = 1; i <= n; i++) {
        const product = {
            product_id: faker.random.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.lorem.sentence(),
            image_url: faker.image.imageUrl(400, 400),
            category_id: faker.random.arrayElement(categoryList).category_id,
        };
        productList.push(product);
    }

    return productList;
};

const randomCategoryList = (n) => {
    const categoryList = [];
    if (n <= 0) return [];

    for (let i = 1; i <= n; i++) {
        const category = {
            category_id: faker.random.uuid(),
            name: faker.commerce.department(),
        };
        categoryList.push(category);
    }

    return categoryList;
};

(() => {
    const numUsers = 5;
    const numCategories = 4;
    const numProducts = 10;

    const userList = randomUserList(numUsers);
    const categoryList = randomCategoryList(numCategories);
    const productList = randomProductList(numProducts, categoryList);
    const db = {
        users: userList,
        products: productList,
        categories: categoryList,
    };

    // write db obj to db.json
    fs.writeFile('./db.json', JSON.stringify(db), () => {
        console.log('Write successfully');
    });
})();
