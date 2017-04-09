import React from 'react';
import { shallow, mount } from 'enzyme';

const Noop = (props) => { return <p>Noop</p> };
import SearchableMovieReviewsContainer from
  '../components/SearchableMovieReviewsContainer'
;

import testReviews from './test-reviews';

describe('<SearchableMovieReviewsContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = !SearchableMovieReviewsContainer.prototype ?
      shallow(<Noop />) : shallow(<SearchableMovieReviewsContainer />);
  });

  it('should have state', () => {
    const tryToGetState = () => { wrapper.state(); }
    expect(SearchableMovieReviewsContainer.prototype).toExist(
      'Component is not yet defined.'
    );
    expect(tryToGetState).toNotThrow('Component should be class component.');
  });

  it('should have a state property "reviews"', () => {
    expect(SearchableMovieReviewsContainer.prototype).toExist(
      'Component is not yet defined.'
    );
    expect(wrapper.state()).toIncludeKey('reviews');
  });

  it('should have top-level element with class "searchable-movie-reviews"', () => {
    expect(wrapper.hasClass('searchable-movie-reviews')).toBeTruthy(
      'Missing top-level element with class "searchable-movie-reviews"'
    );
  });

  it('should render reviews after reviews state updated', () => {
    wrapper = !SearchableMovieReviewsContainer.prototype ?
      mount(<Noop />) : mount(<SearchableMovieReviewsContainer />);
    wrapper.setState({ reviews: testReviews });
    wrapper.update();
    expect(wrapper.find('.review').length).toEqual(testReviews.length);
  });

  // TODO: test for rendering of MovieReviews somehow?

});
