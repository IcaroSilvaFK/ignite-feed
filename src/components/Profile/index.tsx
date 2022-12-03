import { Container } from './styles';

import { Variant } from './types';

interface IProfileProps {
  variant: Variant;
  alt: string;
  source: string;
}

export function Profile(props: IProfileProps) {
  const { variant, alt, source } = props;

  return (
    <Container variant={variant}>
      <img src={source} alt={alt} />
    </Container>
  );
}
