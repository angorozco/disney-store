import { products } from "../mock/products";

export const getItem = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((product) => product.id === +id));
        }, 2000);
    });
};
