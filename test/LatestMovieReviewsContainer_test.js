import React from 'react';
import { shallow, mount } from 'enzyme';

const Noop = (props) => { return <p>Noop</p> };
import LatestMovieReviewsContainer from
  '../components/LatestMovieReviewsContainer'
;

import testReviews from './test-reviews';

describe('<LatestMovieReviewsContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = !LatestMovieReviewsContainer.prototype ?
      shallow(<Noop />) : shallow(<LatestMovieReviewsContainer />);
  });

  it('should have state', () => {
    const tryToGetState = () => { wrapper.state(); }
    expect(LatestMovieReviewsContainer.prototype).toExist(
      'Component is not yet defined.'
    );
    expect(tryToGetState).toNotThrow('Component should be class component.');
  });

  it('should have a state property "reviews"', () => {
    expect(LatestMovieReviewsContainer.prototype).toExist(
      'Component is not yet defined.'
    );
    expect(wrapper.state()).toIncludeKey('reviews');
  });

  it('should have top-level element with class "latest-movie-reviews"', () => {
    expect(wrapper.hasClass('latest-movie-reviews')).toBeTruthy();
  });

  it('should render reviews after reviews state updated', () => {
    wrapper = !LatestMovieReviewsContainer.prototype ?
      mount(<Noop />) : mount(<LatestMovieReviewsContainer />);
    wrapper.setState({ reviews: testReviews });
    wrapper.update();
    expect(wrapper.find('.review').length).toEqual(testReviews.length);
  });

});
