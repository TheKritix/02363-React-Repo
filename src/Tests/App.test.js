import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import App from '../App';
import { homepage } from './components/Homepage/Homepage'
import { MemoryRouter } from 'react-router';

jest.mock('./components/Homepage/Homepage');

test('render HomePage on default route', () => {
  const app = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }
  HomePage.mockImplementation(() => <div>HomePageMock</div>);

  render(
    <MemoryRouter>
      <App app={app} />
    </MemoryRouter>
    );
  expect(screen.getByText("HomePageMock").toBeInTheDocument());
});


