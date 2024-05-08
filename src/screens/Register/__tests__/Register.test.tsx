import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Register from '../Register';
import {act} from 'react-test-renderer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

const mockNavigation = {
  navigate: jest.fn(),
};
jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => jest.fn(),
}));

describe('Register', () => {
  it('renders correctly', () => {
    const {getByText} = render(<Register navigation={mockNavigation} />);
    expect(getByText('Register')).toBeTruthy();
    expect(getByText('First Name')).toBeTruthy();
    expect(getByText('Last Name')).toBeTruthy();
    expect(getByText('Email')).toBeTruthy();
    expect(getByText('Password')).toBeTruthy();
    expect(getByText('Already have an account?')).toBeTruthy();
  });

  it('navigates to Login screen on "Already have an account?" button press', () => {
    const {getByText} = render(<Register navigation={mockNavigation} />);
    fireEvent.press(getByText('Already have an account?'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Login');
  });

  it('shows an error when fields are empty and Register button is pressed', async () => {
    const {getByText} = render(<Register navigation={mockNavigation} />);

    await act(async () => {
      fireEvent.press(getByText('Register'));
      await new Promise(resolve => setTimeout(resolve, 2000));
    });

    expect(getByText('First name is required')).toBeTruthy();
    expect(getByText('Last name is required')).toBeTruthy();
    expect(getByText('Email is required')).toBeTruthy();
    expect(getByText('Password is required')).toBeTruthy();
  });

  it('shows an error when email is invalid and Register button is pressed', async () => {
    const {getByText, getByPlaceholderText} = render(
      <Register navigation={mockNavigation} />,
    );
    await act(async () => {
      fireEvent.changeText(
        getByPlaceholderText('Enter your email address'),
        'invalidEmail',
      );
      fireEvent.press(getByText('Register'));
      await new Promise(resolve => setTimeout(resolve, 2000));
    });

    expect(getByText('Email is invalid')).toBeTruthy();
  });

  it('shows an error when password is less than 3 characters and Register button is pressed', async () => {
    const {getByText, getByPlaceholderText} = render(
      <Register navigation={mockNavigation} />,
    );
    await act(async () => {
      fireEvent.changeText(getByPlaceholderText('Enter your password'), 'ab');
      fireEvent.press(getByText('Register'));
      await new Promise(resolve => setTimeout(resolve, 2000));
    });

    expect(
      getByText('Password should be minimun 3 characters long'),
    ).toBeTruthy();
  });

  it('calls OnSignUpPressed when Register button is pressed', async () => {
    const {getByText, getByPlaceholderText} = render(
      <Register navigation={mockNavigation} />,
    );

    fireEvent.changeText(getByPlaceholderText('Enter your first name'), 'Test');
    fireEvent.changeText(getByPlaceholderText('Enter your last name'), 'User');
    fireEvent.changeText(
      getByPlaceholderText('Enter your email address'),
      'testuser@example.com',
    );
    fireEvent.changeText(
      getByPlaceholderText('Enter your password'),
      'password',
    );

    // const mockSetItem = jest.spyOn(AsyncStorage, 'setItem');
    const mockAlert = jest.spyOn(Alert, 'alert');

    await act(async () => {
      fireEvent.press(getByText('Register'));
      await new Promise(resolve => setTimeout(resolve, 2000));
    });

    // expect(mockSetItem).toHaveBeenCalled();
    expect(mockAlert).not.toHaveBeenCalledWith(
      'Error',
      'Email is already registered',
    );
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Login');
  });

  it('shows an error when email is already registered and Register button is pressed', async () => {
    const {getByText, getByPlaceholderText} = render(
      <Register navigation={mockNavigation} />,
    );

    const mockAlert = jest.spyOn(Alert, 'alert');
    jest
      .spyOn(AsyncStorage, 'getItem')
      .mockImplementation(() =>
        Promise.resolve(JSON.stringify([{email: 'testuser@example.com'}])),
      );

    fireEvent.changeText(getByPlaceholderText('Enter your first name'), 'Test');
    fireEvent.changeText(getByPlaceholderText('Enter your last name'), 'User');
    fireEvent.changeText(
      getByPlaceholderText('Enter your email address'),
      'testuser@example.com',
    );
    fireEvent.changeText(
      getByPlaceholderText('Enter your password'),
      'password',
    );

    await act(async () => {
      fireEvent.press(getByText('Register'));
      await new Promise(resolve => setTimeout(resolve, 2000));
    });

    expect(mockAlert).toHaveBeenCalledWith(
      'Error',
      'Email is already registered',
    );
  });
});
