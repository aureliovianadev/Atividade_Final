import { View, FlatList, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'

export default function AppComDbLocal() {

  const carros = [
    {
      id: 1,
      marca: 'Chevrolet',
      modelo: 'Onix',
      ano: 2021,
      cor: 'Preto',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hkKlNzcGftOqKp-L7FKn_lZWgCRryKVytQ&s'
    },
    {
      id: 2,
      marca: 'Volkswagen',
      modelo: 'Gol',
      ano: 2019,
      cor: 'Branco',
      imagem: 'https://img.olx.com.br/images/97/970518218334081.webp'
    },
    {
      id: 3,
      marca: 'Ford',
      modelo: 'Mustang',
      ano: 2020,
      cor: 'Vermelho',
      imagem: 'https://live.dealer-asset.co/images/br1001/product/paintSwatch/vehicle/ford-brasil-mustang-gt-performance-vermelho-zadar-250324.jpg?s=1024'
    },
    {
      id: 4,
      marca: 'Honda',
      modelo: 'Civic',
      ano: 2022,
      cor: 'Cinza',
      imagem: 'https://image1.mobiauto.com.br/images/api/images/v1.0/285726217/transform/fl_progressive,f_webp,q_80'
    },
    {
      id: 5,
      marca: 'Fiat',
      modelo: 'Argo',
      ano: 2018,
      cor: 'Prata',
      imagem: 'https://image1.mobiauto.com.br/images/api/images/v1.0/77439658/transform/fl_progressive,f_webp,q_85,w_959'
    }
  ]

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.imagem }} />
      <Card.Title 
        title={`${item.marca} ${item.modelo}`}
        subtitle={`Ano: ${item.ano}   |   Cor: ${item.cor}`}
      />
    </Card>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={carros}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  card: {
    marginBottom: 15
  }
})
