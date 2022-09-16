import { MagnifyingGlassPlus } from 'phosphor-react';
import { Outlet } from 'react-router-dom';
import { Button } from '../components/Button';

import { useModal } from '../store/useModal';

import { Container, Header, Footer } from './styles';

export function Layout() {
  const { openModal } = useModal((state) => state);

  return (
    <Container>
      <Header>
        <img src="/assets/Logo.png" alt="" />
      </Header>
      <div>
        <h1>
          Seu <span>duo</span> está aqui.
        </h1>
      </div>

      <section>
        <Outlet />
      </section>

      <Footer>
        <div>
          <div>
            <strong>Não encontrou seu duo?</strong>
            <p>Públique um anúncio para encontrar novos players!</p>
          </div>
          <div>
            <Button
              text="Publicar anúnico"
              variant="solid"
              leftIcon={<MagnifyingGlassPlus size={25} />}
              onClick={openModal}
            />
          </div>
        </div>
      </Footer>
    </Container>
  );
}
