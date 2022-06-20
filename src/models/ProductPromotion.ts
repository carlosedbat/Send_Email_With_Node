type Product = {
    title: string,
    oldPrice: number,
    actualPrice: number,
    image: string
}

const data:Product[] = [
    {title:'Produto X', oldPrice: 100, actualPrice: 80, image:'https://paquimetro.reguaonline.com/images/paquimetro.jpg'},
    {title:'Produto X1', oldPrice: 100, actualPrice: 80, image:'https://paquimetro.reguaonline.com/images/paquimetro.jpg'},
    {title:'Produto X2', oldPrice: 100, actualPrice: 80, image:'https://paquimetro.reguaonline.com/images/paquimetro.jpg'},
    {title:'Produto X3', oldPrice: 100, actualPrice: 80, image:'https://paquimetro.reguaonline.com/images/paquimetro.jpg'},
    {title:'Produto X4', oldPrice: 100, actualPrice: 80, image:'https://paquimetro.reguaonline.com/images/paquimetro.jpg'}    
];

export const Product = {
    getAll: ():Product[] => {
        return data;
    },
    getFromPriceAfter: (price:number): Product[] => {
        return data.filter(item=>item.actualPrice >= price);
    }
};