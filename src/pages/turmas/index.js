import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

function Turmas () {
    return (
        <ScrollView contentContainerStyle={styles.ScrollContent}>
            <Text style={styles.Turmas}>TURMAS</Text>

        <View style={styles.content}>
            <TouchableOpacity>
                <Image source={require('../../assets/3mds.png')} style={styles.IconsT}/>
                <Text style={styles.IconsText}>3MDS</Text>
            </TouchableOpacity>
         </View>

        <View style={styles.content}>
            <TouchableOpacity>
                <Image source={require('../../assets/3tds.png')} style={styles.IconsT}/>
                <Text style={styles.IconsText}>3TDS</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.content}>
            <TouchableOpacity>
                <Image source={require('../../assets/2tdp.png')} style={styles.IconsT}/>
                <Text style={styles.IconsText}>2TDP</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
    ScrollContent: {
        alignItems: 'center',
        padding: 20
    },
    content: {
        marginVertical: 70,
    },
    Turmas: {
        fontSize: 32,
        fontWeight: 'bold',
        padding: 15
    },
    IconsT: {
        width: 215,
        height: 170,
        marginRight: 15
    },
    IconsText: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10
    }
})

export default Turmas;