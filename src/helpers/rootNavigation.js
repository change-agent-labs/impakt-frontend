import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?._navigation.navigate(name, params);
}
