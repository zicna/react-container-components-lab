const React = require('react');
const { shallow } = require('enzyme');

const Noop = (props) => { return <p>Noop</p> };
const MovieReviews = require('../components/MovieReviews');

const testReviews = require('./test-reviews');

describe('<MovieReviews />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = !MovieReviews.prototype ?
      shallow(<Noop />) : shallow(<MovieReviews reviews={testReviews} />);
  });

  it('should be a stateless functional component', () => {
    const tryToGetState = () => { wrapper.state(); }
    expect(MovieReviews.prototype).toExist('Component is not yet defined.');
    expect(tryToGetState).toThrow(
      'ShallowWrapper::state() can only be called on class components',
      'Component should not have state.'
    );
  });

  it('should have defaultProp "reviews"', () => {
    const defaultProps = MovieReviews.defaultProps;
    expect(defaultProps).toExist('defaultProps is not defined.');
    expect(defaultProps).toIncludeKey('reviews');
  });

  it('should have a top-level component with class "review-list"', () => {
    expect(wrapper.hasClass('review-list')).toBeTruthy();
  });

  it('should render all the reviews', () => {
    expect(wrapper.find('.review').length).toEqual(testReviews.length);
  });

});
