import { Button } from '../Button';
import { Profile as ImageUser } from '../Profile';
import { Comment } from '../Comment';
import {
  Container,
  Header,
  Profile,
  ImageContainer,
  Column,
  Body,
  ContainerFlags,
  Footer,
  ContainerComments,
} from './styles';

export function Post() {
  return (
    <Container>
      <Header>
        <Profile>
          <ImageUser
            source='https://avatars.githubusercontent.com/u/86238635?v=4'
            alt='Icaro Vieira da Silva'
            variant='outline'
          />
          <Column>
            <strong>Icaro Vieira</strong>
            <span>Front-End developer</span>
          </Column>
        </Profile>
        <span>Públicado há 1h</span>
      </Header>
      <Body>
        <span>Fala galera👋</span>

        <p>
          Acabei de subir mais um projeto no meu protifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do proejto é DoctorCare🚀
        </p>

        <a href='#'>icaro.design/doctorcare</a>
        <ContainerFlags>
          <span>#novoprojeto</span>
          <span>#nlw</span>
          <span>#rockeseat</span>
        </ContainerFlags>
      </Body>
      <Footer>
        <span>Deixe seu feedback</span>

        <form action=''>
          <textarea />
          <div>
            <Button variant='solid'>Publicar</Button>
          </div>
        </form>
      </Footer>
      <ContainerComments>
        <Comment />
      </ContainerComments>
    </Container>
  );
}
