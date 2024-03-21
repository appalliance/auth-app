import React, { ReactNode } from 'react';

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}