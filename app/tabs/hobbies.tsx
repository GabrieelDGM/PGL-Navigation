import React from 'react'
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Hobbies() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cosas que me gustan</Text>

        <ScrollView style={styles.list}>
            <Text style={styles.item}>Me gusta el anime</Text>
            <Text style={styles.item}>Me series y peliculas</Text>
            <Text style={styles.item}>Me gusta la montaña y la playita</Text>
            <Text style={styles.item}>Me gusta viajar</Text>
            <Text style={styles.item}>Me gusta mantenerme bien fisicamente</Text>
            <Text style={styles.item}>Me gusta pasar tiempo familiar</Text>
            <Text style={styles.item}>Me gusta la musica variada</Text>
            <Text style={styles.item}>Me gusta el futbol, HALA MADRID</Text>
            <Text style={styles.item}>Me gusta sacar a pasear a mi perro</Text>
            
        </ScrollView>

     </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,    
        backgroundColor: '#cecacaff',
    },
    title: {
        fontSize: 35,
        fontWeight: '500',
        textTransform: "capitalize",
        textAlign: "center",
        
    },
    list: {
        marginTop: 40,
    },
    item: {
    borderWidth: 5,
    borderColor: "beige",
    padding: 20,
    color: "black",
    textAlign: "center",
    fontWeight: "400",
    fontSize: 18,
    backgroundColor: "lightgray",
    marginBottom: 8,
    borderRadius: 10,
    },
});

