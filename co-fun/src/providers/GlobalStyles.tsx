'use client';

import { PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';

const StyledDocument = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body, html {
    height: 100%;
    margin: 0;
  }
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  iframe {
    width: 100%!important;
    top: -35%!important;
    left: -5.5%!important;
  }
  .refferal_badge {
    display: none!important;
  }
  #mc_embed_shell {
  width: 600px;
  }
  #mc-embedded-subscribe {
    font-family: GingerBold;
    background: #1DC64D!important;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    padding: .5rem 1rem!important;
    height: unset!important;
    width: fit-content!important;
    border-radius: 5rem!important;
    color: #fff;
    cursor: pointer;
    padding-left: 1.1rem!important;
    padding-right: 1.1rem!important;
  }
  #mc_embed_signup_scroll, #mc_embed_shell {
  display: flex!important;
  justify-content: space-around!important;
  align-items: center!important;
  flex-direction: column;
  max-width: 100%!important;
  }

  #mc_embed_signup .foot {
    display: flex!important;
  }

  @media screen and (min-width: 768px) {
    #mc_embed_signup_scroll, #mc_embed_shell {
      flex-direction: column;
    }
    #mc_embed_signup .foot {
      display: grid;
    }

    iframe {
      width: 110%!important;}
  }

  .contact {
  flex-direction: column;
  }

  #mc_embed_signup {
    width: 100%!important;
  }
 #mc_embed_signup .mc-field-group input {
    width: 80%!important;
    margin: auto;
  }
  .mc-field-group {
    width: 100%;
    margin: 1rem;
  }
  #mc_embed_signup .mc-field-group-contact input {
    width: 100%!important;
  }
  .subscribe-section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #mc-embedded-subscribe {
    padding-left: 1.5rem!important;
    padding-right: 1.5rem!important;
  }
  .contact-btn .foot {
    display: flex!important;
    margin: auto;
  }
`;

export function GlobalStyles({ children }: PropsWithChildren) {
  return (
    <>
      <StyledDocument />
      {children}
    </>
  );
}