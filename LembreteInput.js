import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';


const LembreteInput = (props) => {

    const [lembrete, setLembrete] = useState('');
    const [lembrete1, setLembrete1] = useState('');

    return (
        <View style={estilos.lembreteView}>
            <TextInput
                placeholder="Produto"
                style={estilos.lembreteTextInput}
                onChangeText={(t) => setLembrete(t)}
                value={lembrete}
            />
            <TextInput
                placeholder="Fabricante"
                style={estilos.lembreteTextInput}
                onChangeText={(t) => setLembrete1(t)}
                value={lembrete1}
            />
            <View
                style={estilos.botao}>
                <Button
                    title="Adicionar Produto"
                    onPress={() => props.onEntradaDeDados(lembrete)}
                    onPress={() => props.onEntradaDeDados1(lembrete1)}
                />
            </View>
            <View
                style={estilos.botao}>
                <Button
                    title="Apagar tudo"
                    onPress={() => { props.onApagarTudo() }} />
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    lembreteTextInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2,
    },
    lembreteView: {
        marginBottom: 8,
        alignItems: 'center'

    },
    botao: {
        width: '80%',
        marginTop: 8
    }
});

export default LembreteInput;