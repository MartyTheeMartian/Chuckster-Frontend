import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Main from 'components/Main';

it('renders App component', () => {
  const result = shallow(<Main />);
  expect(toJson(result)).toMatchSnapshot();
});
