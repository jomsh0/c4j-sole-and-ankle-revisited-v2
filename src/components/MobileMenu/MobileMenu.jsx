import React from 'react';
import styled from 'styled-components';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

import { Dialog, DialogPortal, DialogClose, DialogContent, DialogOverlay, DialogTitle, DialogDescription } from '@radix-ui/react-dialog'

const MobileMenu = ({ isOpen, onDismiss }) => {

  return (
    <Dialog open={isOpen} onOpenChange={onDismiss}>
      <DialogPortal>
        <Overlay />
        <Content>
          <VisuallyHidden><DialogTitle>Menu</DialogTitle></VisuallyHidden>
          <VisuallyHidden><DialogDescription>Menu</DialogDescription></VisuallyHidden>
          <NavLinks>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </NavLinks>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
          <Close asChild>
            <UnstyledButton>
              <Icon id="close" />
            </UnstyledButton>
          </Close>
        </Content>
      </DialogPortal>
    </Dialog>
  );
};

export default MobileMenu;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  gap: 22px;
  font-size: 1.125rem;
  font-weight: 600;
  
  a {
    line-height: 1;
    text-decoration: none;
    color: inherit;
    text-transform: uppercase;
  }
`

const Footer = styled.footer`
  height: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  color: var(--color-gray-700);

  a {
    line-height: 1;
    text-decoration: none;
    color: inherit;
  }
`

const Close = styled(DialogClose)`
  position: absolute;
  top: 26px;
  right: 16px;
`

const Overlay = styled(DialogOverlay)`
	background-color: hsl(0deg 0% 0% / .75);
	position: fixed;
	inset: 0;
`

const Content = styled(DialogContent)`
	background-color: white;
	position: fixed;
	right: 0;
  top: 0;
  bottom: 0;
	width: 90vw;
	padding: 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`
