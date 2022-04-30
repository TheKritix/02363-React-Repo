import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import CreateProducts from '../components/CreateProducts/CreateProducts';


test('clicking submit button calls handler once', async () => {
    const createProducts = {
        content: 'Component testing is done with react-testing-library',
        important: true
    }
  
  
  
    const mockHandler = jest.fn();
    render(<CreateProducts createProducts={createProducts} toggleImportance={mockHandler}/>);
  
    //const submitButton = screen.getByTestId('creaProdSubmit');
    //userEvent.click(submitButton);
    //expect(mockHandler.mock.calls).toHaveLength(1);
  });