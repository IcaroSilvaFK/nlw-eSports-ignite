/**
 * @author @IcaroSilvaFK
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Routes } from './routes';
import { Modal } from './components/Modal';

import 'react-toastify/dist/ReactToastify.css';

const $modal = document.createElement('div');
$modal.setAttribute('id', 'modal');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
      <Modal />
      <ToastContainer />
    </ThemeProvider>
  </StrictMode>,
);
