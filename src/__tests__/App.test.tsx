import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from 'App';

it('renders App component', () => {
  const result = shallow(<App />);
  expect(toJson(result)).toMatchSnapshot();
});
