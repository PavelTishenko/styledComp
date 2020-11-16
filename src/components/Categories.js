import React from 'react';
import styled from 'styled-components';

export const Categories = ({name}) => {
    return(
        <Name>{name}</Name>
    );
};

const Container = styled.View``;

const Name = styled.Text`
    font-size: 32;
    font-weight: 600;
    margin-left: 15px;
    color: #bcbece;
`;