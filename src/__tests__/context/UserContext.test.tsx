import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UserContext from 'context/UserContext';
import { BrowserRouter as Router } from 'react-router-dom';


it('renders App component', () => {
  const result = shallow(
    <UserContext>
      <Router />
    </UserContext>
  );
  expect(toJson(result)).toMatchSnapshot();
});
