import React, {useState} from 'react';
import {text, Button} from 'react-native';

export default props => {
    const [numero, setNumero] = useState(props.inicial)

    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)

    return (
        <>
        <Text>{numero}</Text>
        <Button tittle = '+' onPress = {inc}/>
        <Button titlle = '-' onPress={dec}/>

        </>
    )

}