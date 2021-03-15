import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test('<App /> matches snapshot', async () => {
  const { getByPlaceholderText, getByText, container } = render(<App />);

  expect(container).toMatchSnapshot();

  const input = getByPlaceholderText('Search Capital');

  fireEvent.change(input, { target: { value: 'ma' } });

  getByText('Maine (ME) Augusta');
  getByText('Maryland (MD) Annapolis');
  getByText('Massachusetts (MA) Boston');
});
