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
    botao: {
        marginVertical: 10
    }
})