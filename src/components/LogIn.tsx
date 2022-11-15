import { useRef, useContext } from 'react';
import { UserContext } from 'context/UserContext';
import { print } from 'graphql';
import Cookies from 'js-cookie';
import axios from 'axios';
import SignUp from 'components/SignUp';
import config from 'config/api';
import userAuth from 'gql/mutations/userAuth.gql';
import { JWT_TOKEN } from 'assets/constants';
import './LogIn.css';


export default function LogIn(): JSX.Element {

  const { user, setUser } = useContext(UserContext);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const fetchLogIn = async (email: string, password: string): Promise<void> => {
    try {
      const { data } = await axios.post(config.baseURL, {
        query: print(userAuth),
        variables: {
          email,
          password,
        },
      },
      config.getHeaders()
      );

      const jwtToken = JSON.parse(data.data.authenticate.jwtToken);

      if (jwtToken) {
        Cookies.set(JWT_TOKEN, jwtToken);

        setUser({
          ...user,
          authenticated: true,
          email,
          password,
        });
      } else {
        Cookies.remove(JWT_TOKEN);

        setUser({
          ...user,
          authenticated: false,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const submitClick = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();

    const emailInput = emailInputRef.current?.value ?? '';
    const passwordInput = passwordInputRef.current?.value ?? '';

    fetchLogIn(emailInput, passwordInput).catch(error => console.error(error));
  };

  return (
    <div className='login-ctn'>
      <h2>
        Login
      </h2>
      <div>
        <form>
          <input
            ref={emailInputRef}
            type='email'
            placeholder='email' />
          <input
            ref={passwordInputRef}
            type='password'
            placeholder='password' />
          <button
            type='submit'
            onClick={submitClick}>
            Submit
          </button>
        </form>
      </div>
      <SignUp />
    </div>
  );
}
