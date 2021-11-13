import React from 'react';

import { View, Text } from 'react-native';

import { Title, Spacer, Cover, Text, Button} from '../../components'
import { Box } from '../../components';

import tour01 from '../../assets/tour-1.png'

const Tour = () => {
    return <Box background="dark" hasPadding justify="center">
        <Spacer size="40px"/>
        <Title big color="light">Chega de rotina sem motivação</Title>
        <Spacer size="50px"/>
        <Cover source={tour01} width="100%" height="100px" />
        <Spacer size="50px"/>
        <Text align="center" small hasPadding>Pensando em um serviço perfeito pra você constuir hábitos e ganhando dinheiro.</Text>
        <Spacer size="50px"/>
        <Button mode="contained" block>Próximo</Button>
    </Box>
}

export default Tour;