import * as React from 'react';
import { Container, Content, Header, Button, InputGroup, Input, Icon } from 'native-base';

export default class SearchBar extends React.Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <InputGroup>
            <Icon name='search' />
            <Input  />
            <Icon name='people' />
          </InputGroup>
          <Button transparent>
            Search
          </Button>
        </Header>
      </Container>
    );
  }
}