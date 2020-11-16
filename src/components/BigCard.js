import React from 'react';
import styled from 'styled-components';

export const BigCard = ({text, color}) => (
    <Container color={color}>
        <ImageContainer>
               <Image source={require('../../assets/avatar.jpg')}/> 
        </ImageContainer>
        <TextContainer>
            <Title>{text}</Title>
        </TextContainer>
    </Container>
);

const Container = styled.View`
    height: 300px;
    width: 400px;
    background-color: ${props => props.color};
    border-radius: 14px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
    margin-left: 7;
    margin-top: 7;
`;

const ImageContainer = styled.View`
    width: 100%;
    height: 250px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
`;
 
const Image = styled.Image`
    width: 100%;
    height: 200px;
`;

const TextContainer = styled.View`
    justify-content: center;
    align-items: center;
`;

const Title = styled.Text`

`;