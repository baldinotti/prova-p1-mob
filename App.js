import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import LembreteItem from './components/exibeItens';
import LembreteItem1 from './components/exibeItens';
import LembreteInput from './components/LembreteInput';


export default function App() {

  //const [lembrete, setLembrete] = useState('');
  const [lembretes, setLembretes] = useState([]);
  const [lembretes1, setLembretes1] = useState([]);

  const [contadorLembretes, setContadorLembretes] = useState(0);
  const [contadorLembretes1, setContadorLembretes1] = useState(0);

  //const capturarLembrete = (digitado) => {
  //   setLembrete(digitado);
  // }


  const entradaDeDados = (lembrete) => {
    setLembretes(lembretes => {
      setContadorLembretes(contadorLembretes + 1);
      return [{ key: contadorLembretes.toString(), value: lembrete }, ...lembretes];
    })
    console.log(lembrete);
  }

  const entradaDeDados1 = (lembrete1) => {
    setLembretes1(lembretes1 => {
      setContadorLembretes1(contadorLembretes1 + 1);
      return [{ key: contadorLembretes1.toString(), value: lembrete1 }, ...lembretes1];
    })
    console.log(lembrete1);
  }

  const apagarLembretes = () => {
    setLembretes([]);
  }

  const apagarLembretes1 = () => {
    setLembretes1([]);
  }

  const removerLembrete = (keyASerRemovida) => {
    setLembretes(lembretes => {
      return lembretes.filter((lembrete) => {
        return lembrete.key !== keyASerRemovida
      })
    })
  }


  return (
    <View style={styles.telaPrincipalView}>

      <LembreteInput onEntradaDeDados={entradaDeDados} onEntradaDeDados1={entradaDeDados1} onApagarTudo={apagarLembretes,apagarLembretes1} />

       <View>
        <FlatList
          data={lembretes1}
          renderItem={
            lembrete1 => (
               <LembreteItem1
                chave={lembrete1.item.key}
                lembrete1={lembrete1.item.value}
                onDelete={removerLembrete}    
 />     
            )}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  itemNaLista: {
    padding: 16,
    backgroundColor: '#EEE',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 12,
    fontSize: 16,
    width: '80%',
    alignSelf: 'center'
  },
  telaPrincipalView: {
    padding: 50
  },
  lembreteView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  lembreteTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2
  }
});
