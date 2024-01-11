import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import LandingScreen from '../LandingScreen';

const mockNavigation = {
  navigate: jest.fn(),
};

describe('LandingScreen', () => {
  it('renders correctly', () => {
    const {getByText} = render(<LandingScreen navigation={mockNavigation} />);
    expect(getByText('Inspire Innovate')).toBeTruthy();
    expect(getByText('Engineer')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
    expect(getByText('Signup')).toBeTruthy();
  });

  it('navigates to Login screen on Login button press', () => {
    const {getByText} = render(<LandingScreen navigation={mockNavigation} />);
    fireEvent.press(getByText('Login'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Login');
  });

  it('navigates to Register screen on Signup button press', () => {
    const {getByText} = render(<LandingScreen navigation={mockNavigation} />);
    fireEvent.press(getByText('Signup'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Register');
  });
});
