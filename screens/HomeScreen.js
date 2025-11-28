import { View, Text, StyleSheet, Button } from 'react-native'

export default function HomeScreen({navigation}) {
    return (
        <View style={estilos.container}>
            <Text>Tela inicial</Text>
            <View style={estilos.botao}>
                <Button
                    title='Ir para Home'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={estilos.botao}>
                <Button
                    title='Ir para o Desconto'
                    onPress={() => navigation.navigate('Desconto')}
                />
            </View>
            <View style={estilos.botao}>
                <Button
                    title='Ir para '
                    onPress={() => navigation.navigate('')}
                />
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao: {
        width: '60%',
        marginTop: 20,
    }
})