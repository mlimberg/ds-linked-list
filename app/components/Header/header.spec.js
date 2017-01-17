import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Header from './Header';

describe('<Header/>', function () {
  it('should display a single h1 tag', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should fire our click event once when clicked', () => {
    sinon.spy(Header.prototype, 'logStuff');
    const wrapper = mount(<Header />);
    wrapper.find('.important-button').simulate('click');
    expect(Header.prototype.logStuff.calledOnce).to.equal(true);
  })
});
