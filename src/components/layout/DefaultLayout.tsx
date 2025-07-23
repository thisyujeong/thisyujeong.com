import React, { type PropsWithChildren } from 'react';

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export default DefaultLayout;
