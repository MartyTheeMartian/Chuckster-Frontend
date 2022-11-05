import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Sidebar from 'components/Sidebar';

it('renders App component', () => {
  const result = shallow(<Sidebar />);
  expect(toJson(result)).toMatchSnapshot();
});
