import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'jest-fetch-mock';

configure({ adapter: new Adapter });

global.React = React;
global.shallow = shallow;
fetchMock.enableMocks();
