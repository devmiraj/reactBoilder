import { Body } from 'app/components/Chatbar/Body';
import { Footer } from 'app/components/Chatbar/Footer';
import { Header } from 'app/components/Chatbar/Header';
import * as React from 'react';
import { ChatWrapper } from './components/CharWrapper';

export function Chat() {
  return (
    <ChatWrapper>
      <Header />
      <Body />
      <Footer />
    </ChatWrapper>
  );
}
