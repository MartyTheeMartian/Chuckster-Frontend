import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ContextWrapper from 'context';
import { BrowserRouter as Router } from 'react-router-dom';


it('renders App component', () => {
  const result = shallow(
    <ContextWrapper>
      <Router />
    </ContextWrapper>
  );
  expect(toJson(result)).toMatchSnapshot();
});
