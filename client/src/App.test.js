/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { ListOfItems } from './components/ListOfItems';
import { NewItem } from './components/NewItem';
import { EmptyList } from './components/EmptyList';

describe('App', () => {
  it('should be able to run tests', () => {
    expect(1 + 2).toEqual(3);
  });
});

describe('ListOfItems', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListOfItems entries={[]} />, div);
  });
});

describe('EmptyList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EmptyList />, div);
  });
});

describe('NewItem', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const addItem = () => {};
    ReactDOM.render(<NewItem addAction={addItem} />, div);
  });
});
