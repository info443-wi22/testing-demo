import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import store from './redux/store'; //will be "single store", may need to clear or re-create

import App from './components/App'; //import Components to test
import { AddTaskForm } from './components/TaskForms';

describe('The app', () => {
  test('renders without errors', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    ); //render into testing DOM!
    //screen.debug(); //view rendered DOM/HTML in console (for debugging)
    expect(screen.getByText("To Do List")).toBeInTheDocument(); //assertion
  })

  test('shows new tasks on form submission', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    ); //render into testing DOM!

    //enter text
    const formInput = screen.getByRole('textbox')
    userEvent.type(formInput, "TEST TASK"); //type in two words

    //click button
    userEvent.click(screen.getByRole('button'));

    //assertion! text appears in list
    expect(screen.getByText("TEST TASK")).toBeInTheDocument();
  })
})

describe('The form element', () => {
  test('clears content after submit', () => {
    const callback = () => {}; //empty
    
    //can render single element
    render(
      <Provider store={store}>
        <AddTaskForm />
      </Provider>
    )
  
    //enter text
    const formInput = screen.getByRole('textbox')
    userEvent.type(formInput, "TEST TASK"); //type in two words

    //shows typed input (controlled form!)
    expect(screen.queryByDisplayValue("TEST TASK")).toBeInTheDocument();

    //click button
    userEvent.click(screen.getByRole('button'));

    //should also clear the form
    expect(screen.queryByDisplayValue("TEST TASK")).not.toBeInTheDocument();
  })
})
