import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import Login from '../Login';
import {Alert} from 'react-native';
import {act} from 'react-test-renderer';

const mockNavigation = {
  navigate: jest.fn(),
};

const mockAlert = jest.spyOn(Alert, 'alert');
const mockUsers = [{email: 'test@example.com', password: 'password'}];

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: jest.fn(() => mockUsers),
}));

describe('Login Component', () => {
  it('renders correctly', () => {
    const {getByPlaceholderText, getByText} = render(
      <Login route={{}} navigation={mockNavigation} />,
    );

    expect(getByText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Enter your email address')).toBeTruthy();
    expect(getByText('Password')).toBeTruthy();
    expect(getByPlaceholderText('Enter your password')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
    expect(getByText('Sign Up')).toBeTruthy();
  });

  it('logs in successfully', async () => {
    const {getByPlaceholderText, getByText} = render(
      <Login route={{}} navigation={mockNavigation} />,
    );

    fireEvent.changeText(
      getByPlaceholderText('Enter your email address'),
      'test@example.com',
    );
    fireEvent.changeText(
      getByPlaceholderText('Enter your password'),
      'password',
    );
    await act(async () => {
      fireEvent.press(getByText('Login'));
      await new Promise(resolve => setTimeout(resolve, 2000));
    });

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Home');
  });

  it('displays an alert box for invalid password', async () => {
    const {getByPlaceholderText, getByText} = render(
      <Login route={{}} navigation={mockNavigation} />,
    );

    fireEvent.changeText(
      getByPlaceholderText('Enter your email address'),
      'test@example.com',
    );
    fireEvent.changeText(
      getByPlaceholderText('Enter your password'),
      'wrongpassword',
    );
    fireEvent.press(getByText('Login'));

    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith('Error', 'Invalid Password');
    });
  });

  it('displays an alert box for invalid email', async () => {
    const {getByPlaceholderText, getByText} = render(
      <Login route={{}} navigation={mockNavigation} />,
    );

    fireEvent.changeText(
      getByPlaceholderText('Enter your email address'),
      'wrongtest@example.com',
    );
    fireEvent.changeText(
      getByPlaceholderText('Enter your password'),
      'password',
    );
    fireEvent.press(getByText('Login'));

    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith('Error', 'Invalid Password');
    });
  });

  it('shows an error when fields are empty and login button is pressed', async () => {
    const {getByText} = render(
      <Login route={{}} navigation={mockNavigation} />,
    );

    await act(async () => {
      fireEvent.press(getByText('Login'));
      await new Promise(resolve => setTimeout(resolve, 2000));
    });

    expect(getByText('Email is required')).toBeTruthy();
    expect(getByText('Password is required')).toBeTruthy();
  });

  it('navigates to Register screen on "Sign Up" button press', () => {
    const {getByText} = render(
      <Login route={{}} navigation={mockNavigation} />,
    );
    fireEvent.press(getByText('Sign Up'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Register');
  });
});
