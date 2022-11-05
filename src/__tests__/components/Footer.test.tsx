import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from 'components/Footer';

it('renders App component', () => {
  const result = shallow(<Footer />);
  expect(toJson(result)).toMatchSnapshot();
});
