import UserContextProvider from './UserContext';


interface ContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export default function ContextWrapper({ children }: ContextProviderProps): JSX.Element {

  /* Insert new context providers here */
  const contextProviders = [
    UserContextProvider,
  ];

  return (
    <>
      {contextProviders.reduceRight((accumlated, Component) => {
        return (
          <Component>
            { accumlated }
          </Component>
        );
      }, children)}
    </>
  );
}
