import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignUp from 'components/SignUp';

it('renders App component', () => {
  const result = shallow(<SignUp />);
  expect(toJson(result)).toMatchSnapshot();
});
