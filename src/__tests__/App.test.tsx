import { render } from '@testing-library/react';
import App from '../App';
import Accordion from '../components/Accordion';

describe('<App />', () => {
  it('should render without errors', () => {
    const { container } = render(<App />);

    expect(container).toBeInTheDocument();
    
  });
});


// ATTENTION!
// Couldn't finish this test suit as I ran out of available time. However, it needs a little tweak and all will be well. I've left it on just for reference.