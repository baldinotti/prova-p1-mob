import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import LembreteItem from './components/LembreteItem';
import LembreteInput from './components/LembreteInput';


export default function App() {

  const [produtos, setProdutos] = useState([]);
  const [fabricantes, setFabricantes] = useState([]);

  const [contadorProdutos, setContadorProdutos] = useState(0);
  const [contadorFabricantes, setContadorFabricantes] = useState(0);


  const adicionarProduto = (produto) => {
    setProduto(produtos => {
      setContadorProdutos(contadorProdutos + 1);
      return [{ key: contadorProdutos.toString(), value: produto }, ...produtos];
    })
    setFabricante(fabricantes => {
      setContadorProdutos(contadorFabricantes + 1);
      return [{ key: contadorFabricantes.toString(), value: fabricante }, ...fabricantes];
    })
    console.log(fabricante);
    console.log(produto);
  }

  // const adicionarFabricante = (fabricante) => {
  //   setFabricante(fabricantes => {
  //     setContadorProdutos(contadorFabricantes + 1);
  //     return [{ key: contadorFabricantes.toString(), value: fabricante }, ...fabricantes];
  //   })
  //   console.log(fabricante);
  // }

  const apagarProdutos = () => {
    setProdutos([]);
  }


  const removerProduto = (keyASerRemovida) => {
    setProdutos(produtos => {
      return produtos.filter((produto) => {
        return produto.key !== keyASerRemovida
      })
    })
  }

  const removerFabricante = (keyASerRemovida) => {
    setFabricante(fabricantes => {
      return fabricantes.filter((fabricante) => {
        return fabricante.key !== keyASerRemovida
      })
    })
  }


  return (
    <View style={styles.telaPrincipalView}>

      <LembreteInput onAdicionarProduto={adicionarProduto} onApagarTudo={apagarProdutos} />

      <View>
        <FlatList
          data={produtos}
          renderItem={
            produto => (
              <ProdutoItem
                chave={produto.item.key}
                produto={produto.item.value}
                onDelete={removerProduto} />
            )
          }
          data={fabricantes}
          renderItem={
            fabricante => (
              <FabricanteItem
                chave={fabricante.item.key}
                produto={fabricante.item.value}
                onDelete={removerFabricante} />
            )
          }
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
