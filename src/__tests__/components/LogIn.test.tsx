import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LogIn from 'components/LogIn';

it('renders App component', () => {
  const result = shallow(<LogIn />);
  expect(toJson(result)).toMatchSnapshot();
});
