import { StatusBar } from 'expo-status-bar';
import { useState } from  'react';
import { StyleSheet, Text, View,TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  
    const [lembrete, setLembrete] = useState('');
    //captura o texto digitado
    const capturarLembrete = (lembrete) => {
    setLembrete(lembrete)
    };
    //para adicionar o que foi digitado
    const adicionarLembrete = () => {
    console.log (lembrete);
}
return (
  <View style={styles.telaPrincipalView}>
  <View style={styles.produtoView}>
    <TextInput  placeholder="Produto" style={styles.InputText}/>
    <TextInput  placeholder="Fabricante" style={styles.InputText}/>
    <Button
    title="Adicinar Produto/Fabricante"
  />
  </View>
  <View>
  {/*Aqui será exibida a lista de produtos e fabricantes*/}
  </View>
  </View>
  );
  }

  const styles = StyleSheet.create({
    telaPrincipalView: {
    padding: 50
    },
    produtoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
    },
    InputText: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2
    }
    });
    
  
