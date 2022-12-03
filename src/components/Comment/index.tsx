import { BiLike } from 'react-icons/bi';
import { FaRegTrashAlt } from 'react-icons/fa';

import { Button } from '../Button';
import { Profile as ImageUser } from '../Profile';

import { Container, ContainerComment, Column, Profile } from './styles';

export function Comment() {
  return (
    <Container>
      <ImageUser
        source='https://avatars.githubusercontent.com/u/86238635?v=4'
        alt='Icaro Vieira da Silva'
        variant='solid'
      />
      <Column>
        <ContainerComment>
          <div>
            <Profile>
              <strong>
                Icaro Vieira <span>(você)</span>
              </strong>
              <span>Cerca de 2h</span>
            </Profile>
            <Button variant='link'>
              <FaRegTrashAlt size={20} />
            </Button>
          </div>

          <p>Muito bom Devon parabéns!!👏👏</p>
        </ContainerComment>
        <Button variant='link'>
          <BiLike size={20} />
          Aplaudir • 03
        </Button>
      </Column>
    </Container>
  );
}
