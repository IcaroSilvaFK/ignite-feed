import { BiEditAlt } from 'react-icons/bi';

import { Button } from '../Button';
import { Profile as ImageUser } from '../Profile';

import { Container, Content, Footer, Header, Profile } from './styles';

export function SideBar() {
  return (
    <Container>
      <Header cover='https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=400&q=50' />
      <Content>
        <ImageUser
          source='https://avatars.githubusercontent.com/u/86238635?v=4'
          alt='Icaro Vieira da Silva'
          variant='outline'
        />
        <Profile>
          <strong>Icaro Vieira</strong>
          <span>front-end developer</span>
        </Profile>
        <Footer>
          <Button variant='outline' role='a' aria-label='a'>
            <BiEditAlt size={20} />
            Editar seu perfil
          </Button>
        </Footer>
      </Content>
    </Container>
  );
}
