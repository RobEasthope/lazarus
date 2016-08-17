/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

var input = require('html!markdown!./markdown-test.md');

export default class HomePage extends React.Component {
  render() {
    return (
      <ReactMarkdown source={input} />
    );
  }
}
