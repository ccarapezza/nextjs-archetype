'use client';

import React, { ReactNode } from 'react'

export default function AsyncComponentWrapper(props: {children: ReactNode}) {
  const {children} = props;
  const childrenArray = new Array().concat(children);
  return (
    <React.Fragment>
      {
        (childrenArray as Array<ReactNode>)?.map((child, index) => {
          return <React.Fragment key={"child-"+new Date().getTime()+index}>{child}</React.Fragment>
        })
      }
    </React.Fragment>
  );
}
