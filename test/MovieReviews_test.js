import React from 'react';
import { shallow } from 'enzyme';

const Noop = (props) => { return <p>Noop</p> };
import MovieReviews from '../components/MovieReviews';

import testReviews from './test-reviews';

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
