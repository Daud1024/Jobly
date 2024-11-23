import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { SignIn } from "@/screens/SignIn";  // Update path if necessary
import { useSignIn } from '@clerk/clerk-expo';
import { useRouter } from "expo-router";

// Mocking Clerk's useSignIn hook
jest.mock('@clerk/clerk-expo', () => ({
  useSignIn: jest.fn(),
}));

// Mocking Expo Router's useRouter hook
jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

// Mocking the components
jest.mock('@/components/InputField', () => 'InputField');
jest.mock('@/components/CustomButton', () => 'CustomButton');
jest.mock('@/components/OAuth', () => 'OAuth');
jest.mock('@/constants', () => ({
  icons: { email: 'email-icon', lock: 'lock-icon' },
  images: { signUpCar: 'signUpCar-image' }
}));

describe('SignIn Component', () => {
  let mockSignIn;
  let mockSetActive;
  let mockRouter;

  beforeEach(() => {
    mockSignIn = jest.fn();
    mockSetActive = jest.fn();
    mockRouter = { replace: jest.fn() };

    // Setting up the mocked `useSignIn` and `useRouter` hooks
    useSignIn.mockReturnValue({ signIn: { create: mockSignIn }, setActive: mockSetActive, isLoaded: true });
    useRouter.mockReturnValue(mockRouter);
  });

  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<SignIn />);

    expect(getByText('Welcome')).toBeTruthy();
    expect(getByPlaceholderText('Enter your email')).toBeTruthy();
    expect(getByPlaceholderText('Enter your password')).toBeTruthy();
    expect(getByText("Don't have an account? Sign Up")).toBeTruthy();
  });

  it('updates the form state when typing in the input fields', () => {
    const { getByPlaceholderText } = render(<SignIn />);

    const emailInput = getByPlaceholderText('Enter your email');
    const passwordInput = getByPlaceholderText('Enter your password');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');

    expect(emailInput.props.value).toBe('test@example.com');
    expect(passwordInput.props.value).toBe('password123');
  });

  it('calls onSignInPress when the sign-in button is pressed', async () => {
    const { getByText } = render(<SignIn />);

    mockSignIn.mockResolvedValueOnce({ status: 'complete', createdSessionId: 'mock-session-id' });

    const signInButton = getByText('Sign In');
    fireEvent.press(signInButton);

    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith({
        identifier: 'test@example.com',
        password: 'password123',
      });
      expect(mockSetActive).toHaveBeenCalledWith({ session: 'mock-session-id' });
      expect(mockRouter.replace).toHaveBeenCalledWith('/');
    });
  });

  it('handles sign-in error correctly', async () => {
    const { getByText } = render(<SignIn />);

    mockSignIn.mockRejectedValueOnce(new Error('Sign-in failed'));

    const signInButton = getByText('Sign In');
    fireEvent.press(signInButton);

    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith({
        identifier: 'test@example.com',
        password: 'password123',
      });
      // Ensure error is logged
      expect(console.error).toHaveBeenCalled();
    });
  });
});
