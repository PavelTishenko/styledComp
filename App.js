import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ScrollView, FlatList} from 'react-native';
import styled from 'styled-components/native';
import {Ionicons} from '@expo/vector-icons';

import {Categories} from './src/components/Categories';
import {Card} from './src/components/Card';
import {BigCard} from './src/components/BigCard';

export const CustomButton = (props) => {
  return ( 
  <ButtonContainer
    backgroundColor={props.backgroundColor}
  >
    <ButtonText color={props.color}>
      Text
    </ButtonText>
  </ButtonContainer>
  )
}

export default function App() {
  const Items = [
    {text: 'Fruits'},
    {text: 'Bread'},
    {text: 'Drinks'},
    {text: 'Veggies'},
    {text: 'Meat'},
    {text: 'Paper Goods'},
  ];
  return (
    <Container>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
      <Titlebar>
        <Avatar source={require('./assets/avatar.jpg')} />
        <Title>Welcome back,</Title>
        <Name> Pavlo </Name>
        <Ionicons 
          name="md-cart" size={32} color="red" 
          style={{position: 'absolute', right: 20, top: 5}}
          />
      </Titlebar>
      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
            padding: 20,
            paddingLeft: 12,
            paddingTop: 30,
            flexDirection: "row"
        }}
        >
        {
          Items.map((category, index) => (
            <Categories name={category.text} key={index} />
          ))
        }
      </ScrollView>
      <Subtitle>Items</Subtitle>
     
      <ItemsLayout>
        <FlatList
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        data={Items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>(<Card name={item.text}/>)}
        />
        <ColumnOne>
            
        </ColumnOne>
        {/* <ColumnTwo>
          <Card />
        </ColumnTwo> */}
      </ItemsLayout>
      <ItemsLayoutTwo>
          <BigCard text="Some text 1" color="purple"/>
          <BigCard text="Some text 2" color="khaki"/>
      </ItemsLayoutTwo>
      </ScrollView>
    </Container>  );
};

const ItemsLayoutTwo = styled.View`
  flex: 1;
  flex-direction: column;  
`;

const Container = styled.View`
    flex: 1;
    background-color: white;
`;

const Titlebar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #b8bece;
`;

const Subtitle = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: 500;
  margin-top: 10px;
  margin-left: 25px;
  text-transform: uppercase;
`;

const ItemsLayout = styled.View`
  flex-direction: row;
  flex: 1;
`;

const ColumnOne = styled.View``;
const ColumnTwo = styled.View``;
