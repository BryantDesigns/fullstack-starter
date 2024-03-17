import e from "express";

const mockUsers = [
    { id: 1, username: 'TBryant44', displayName: 'Tyler Bryant' },
    { id: 2, username: 'BrookieB', displayName: 'Brooklyn Bryant' },
    { id: 3, username: 'SaintSandy', displayName: 'Sandy Bryant' },
];

const mockProducts = [
    {
        id: 1,
        name: 'Apple iPhone 13',
        price: 799,
        category: 'Electronics',
        description: '5.4-inch display, A15 Bionic chip, 5G capable',
    },
    {
        id: 2,
        name: 'Samsung Galaxy S21',
        price: 699,
        category: 'Electronics',
        description: '6.2-inch display, Exynos 2100, 5G capable',
    },
    {
        id: 3,
        name: 'Dell XPS 13',
        price: 999,
        category: 'Computers',
        description: '13.4-inch display, Intel i7, 16GB RAM, 512GB SSD',
    },
];

export { mockUsers, mockProducts };