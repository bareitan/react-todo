var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils')

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  })
})


// describe('TodoApp', () => {
//   it('should exist', () => {
//     var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
//     var $el = $(ReactDom.findDOMNode(todoApp));
//
//   })
// })
