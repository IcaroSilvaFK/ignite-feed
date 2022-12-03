import { Header } from '../../components/Header';
import { Post } from '../../components/Post';
import { SideBar } from '../../components/SideBar';
import { Body, Container, Content } from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <SideBar />
        <Body>
          <Post />
        </Body>
      </Content>
    </Container>
  );
}
