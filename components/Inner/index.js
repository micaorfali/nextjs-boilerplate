import React from 'react';
import PropTypes from 'prop-types';
import { InnerContainer } from './styled';

const Inner = ({children, ...props}) => {
  return (
    <InnerContainer>
      {children}
    </InnerContainer>
  );
}

Inner.propTypes = {
  children: PropTypes.any.isRequired
};

export default Inner;
