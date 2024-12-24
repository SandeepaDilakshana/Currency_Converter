import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { getExchangeRate } from '../src/services/api';

const handleConvert = async () => {
    const rate = await getExchangeRate(baseCurrency, targetCurrency)
    if (rate) {
        setResult(rate * parseFloat(amount));
    }
}

export default function Home() {
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [targetCurrency, setTargetCurrency] = useState('EUR');
    const [amount, setAmount] = useState('');
    const [result, setResult] = useState(null);

    return (
        <View>
            <TextInput
                label="Base Currency"
                mode="outlined"
                value={baseCurrency}
                onChangeText={setBaseCurrency}
                style={styles.input} />

            <TextInput
                label="Target Currency"
                mode="outlined"
                value={targetCurrency}
                onChangeText={setTargetCurrency}
                style={styles.input} />

            <TextInput
                label="Amount"
                mode="outlined"
                value={amount}
                onChangeText={setAmount}
                style={styles.input} />

            <Button mode="outlined" onPress={handleConvert}>
                Convert
            </Button>
            {result && <Text>Converted Amount: {result.toFixed(2)}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        padding: 8,
        marginVertical: 10
    },
});