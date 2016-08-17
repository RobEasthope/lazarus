/*
 * Projects
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import styles from './styles.css';

var input = require('html!markdown!./project-index.md');

export default class Projects extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
			<ReactMarkdown source={input} />
    );
  }
}
