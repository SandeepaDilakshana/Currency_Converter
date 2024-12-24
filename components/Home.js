import { useState } from 'react';
import { View, Text } from 'react-native'
import { TextInput } from 'react-native-paper'

const [baseCurrency, setBaseCurrency] = useState('USD');
const [targetCurrency, setTargetCurrency] = useState('EUR');
const [amount,setAmount] = useState('');
export default function Home() {
    return (
        <View>
            <Text>Base Curency :</Text>
            <TextInput
                label="Base Currency"
                mode="outlined"
                value={baseCurrency}
                onChangeText={setBaseCurrency}
                style={styles.input} />

            <Text>Target Currency :</Text>
            <TextInput
                label="Target Currency"
                mode="outlined"
                value={targetCurrency}
                onChangeText={setTargetCurrency}
                style={styles.input} />

            <Text>Amount :</Text>
            <TextInput
                label="Amount"
                mode="outlined"
                value={amount}
                onChangeText={setAmount}
                style={styles.input} />    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        borderWidth: 1,
        padding: 8,
        marginVertical: 10
    },
});