import React from 'react';
import { Text } from 'react-native'
import { Container } from './styles';

interface IModal {
    setaddProductModal(active: boolean): void;
}

const AddProduct = ({ setaddProductModal }: IModal) => {
  return <Container>
      <Text>Add product modal</Text>
  </Container>;
}

export default AddProduct;