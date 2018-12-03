import React from 'react';

const decoratorExample = config => {
  const { props, component, parentProps } = config;
  const Component = component;
  return WrappedComponent => () => (
    <WrappedComponent {...parentProps}>
      {mergeProps =>
        component ? <Component {...props} {...mergeProps} /> : null
      }
    </WrappedComponent>
  );
};

export default decoratorExample;
