import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

export default function DescontoScreen() {

    const [preco, setPreco] = useState('')
    const [porcentagem, setPorcentagem] = useState('')
    const [preco_final, setPreco_final] = useState('')
    const [valor_desconto, setValor_desconto] = useState('')

   
    function valor_do_desconto() {
        setValor_desconto((parseFloat(preco) * (parseInt(porcentagem)/100)))
    }
    
     function calculardesconto() {
        setPreco_final(parseFloat(preco)-(parseFloat(preco) * (parseInt(porcentagem)/100)))
    }
    return (
        <View>
            <Text>Calcular o Desconto do Produto</Text>

            <TextInput
                placeholder="Digite o valor do produto"
                value={preco}
                onChangeText={setPreco}
            />

            <TextInput
                placeholder="Digite quantos porcentos o produto tem de desconto"
                value={porcentagem}
                onChangeText={setPorcentagem}
            />

          <View style={estilos.botao}>
    <Button
        title="Calcular"
        onPress={() => {
            calculardesconto();  
            valor_do_desconto(); 
        }}
    />
</View>

            <Text>valor_desconto: {valor_desconto}</Text>
            <Text>preco_final: {preco_final}</Text>

        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        marginVertical: 10,
        fontSize: 16,
    },
    botao: {
        width: '100%',
        marginVertical: 20,
        borderRadius: 8,
        overflow: 'hidden',
    },
    resultado: {
        fontSize: 18,
        marginVertical: 5,
        color: '#333',
        fontWeight: '500',
    },
})