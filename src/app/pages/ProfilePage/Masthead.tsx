import { Footer } from 'app/components/MasterBar/Footer';
import { Header } from 'app/components/MasterBar/Header';
import { Body } from 'app/components/MasterBar/Body';
import * as React from 'react';
import { FormWrapper } from './components/FormWrapper';

export function Masthead() {
  return (
    <FormWrapper>
      <Header />
      <Body />
      <Footer />
    </FormWrapper>
  );
}
