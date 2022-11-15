import { createContext, useState, useMemo } from 'react';


interface UserData {
  authenticated: boolean;
  email: string;
  password: string;
  jwtToken: string;
}

interface UserContextInterface {
  user: UserData;
  setUser: React.Dispatch<React.SetStateAction<UserData>>;
}

interface ChildrenProps {
  children: JSX.Element | JSX.Element[];
}

const defaultUser = {
  authenticated: false,
  email: '',
  password: '',
  jwtToken: '',
};

const defaultUserContext: UserContextInterface = {
  user: defaultUser,
  setUser: () => {},
};


export const UserContext = createContext(defaultUserContext);

export default function UserContextProvider({ children }: ChildrenProps): JSX.Element {

  const [user, setUser] = useState(defaultUser);

  const userContextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return (
    <UserContext.Provider value={userContextValue}>
      { children }
    </UserContext.Provider>
  );
}
