export const items = [
    {
        title: 'Nike',
        imagen: 'Nike.jpg',
        precio: 1000,
        id: 1
    },
    {
        title: 'Adidas',
        imagen: 'Adidas.jpg',
        precio: 500,
        id: 2
    },
    {
        title: 'Reebok',
        imagen: 'Reebok.webp',
        precio: 2000,
        id: 3
    },{
        title: 'Converse',
        imagen: 'Converse.jpg',
        precio: 1000,
        id: 4
    },
    {
        title: 'Vans',
        imagen: 'Vans.webp',
        precio: 500,
        id: 5
    },
    {
        title: 'Puma',
        imagen: 'Puma.webp',
        precio: 2000,
        id: 6
    },
]

export function getItemById (id){
    return items.find((item) => item.id == id)
}