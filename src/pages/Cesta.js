import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import Details from './components/Details';

export default function Cesta({ topo, detalhes }) {
    return <>
        <Header {...topo} />

        <View style={estilos.cesta}>
            <Details {...detalhes} />
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});
