import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { Masthead } from './Masthead';
// import { Features } from './Features';
import { PageWrapper } from 'app/components/PageWrapper';
import { Chat } from './Chat';

export function ProfilePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application ProfilePage"
        />
      </Helmet>
      <PageWrapper>
        <NavBar />
        <Masthead />
        <Chat />
      </PageWrapper>
    </>
  );
}
