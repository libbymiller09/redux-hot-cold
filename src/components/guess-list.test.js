import React from 'react';
import { shallow } from 'enzyme';

import { GuessList } from './guess-list';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]} />);
  });

  it('Renders a guess list', () => {
    const values = [1, 4, 8];
    const wrapper = shallow(<GuessList guesses={values} />); 
    const items = wrapper.find('li');
    expect(items.length).toEqual(values.length);
    values.forEach((value, index) => {
      expect(items.at(index).text().toEqual(value.toString()));
    });
  });
});