import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Product from './components/product/product';
import Header from './components/layouts/header';


test('renders product details', () => {
  const mockProductData = {
    id: 1,
    title: 'Sample Product',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    price: 99.99,
    imageURL: 'https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg',
    sizeOptions: [
      { id: 1, label: 'S' },
      { id: 2, label: 'M' },
      { id: 3, label: 'L' },
    ],
  };

  const mockUpdateCartData = jest.fn();

  render(<Product productData={mockProductData} updateCartData={mockUpdateCartData} />);

  const productTitle = screen.getByText('Sample Product');
  const productPrice = screen.getByText('99.99');
  const productDescription = screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit...');

  expect(productTitle).toBeInTheDocument();
  expect(productPrice).toBeInTheDocument();
  expect(productDescription).toBeInTheDocument();
});

test('selects size and adds product to cart', () => {
  const mockProductData = {
    id: 1,
    title: 'Sample Product',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    price: 99.99,
    imageURL: 'https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg',
    sizeOptions: [
      { id: 1, label: 'S' },
      { id: 2, label: 'M' },
      { id: 3, label: 'L' },
    ],
  };

  const mockUpdateCartData = jest.fn();

  render(<Product productData={mockProductData} updateCartData={mockUpdateCartData} />);

  const sizeButtons = screen.getAllByRole('button');
  fireEvent.click(sizeButtons[1]); // Select size 'M'

  const addToCartButton = screen.getByRole('button', { name: 'ADD TO CART' });
  fireEvent.click(addToCartButton);

  expect(mockUpdateCartData).toHaveBeenCalledWith([
    {
      title: 'Sample Product',
      image: 'https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg',
      sizeId: 2,
      sizeLabel: 'M',
      quantity: 1,
      price: 99.99,
    },
  ]);

});