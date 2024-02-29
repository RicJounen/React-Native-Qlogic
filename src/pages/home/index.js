import React from "react";
import { View, Text, ScrollView, SafeAreaView, StyleSheet,Image, TouchableOpacity } from "react-native"; 
import { useNavigation } from "@react-navigation/native";


function Home () {

    const navigation = useNavigation();

    const handleButtonPress = () => {navigation.navigate('Turmas');
};

    return (
        <SafeAreaView style={styles.Container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.bemVindo}>BEM-VINDO</Text>

        <View style={styles.Content}>
            <TouchableOpacity onPress={handleButtonPress}>
                <Image source={require('../../assets/turmas.png')} style={styles.IconsH}/>
                    <Text style={styles.imageText}>TURMAS</Text>
            </TouchableOpacity>
        </View>
        
        <View style={styles.Content}>
            <TouchableOpacity>
                <Image source={require('../../assets/frequencia.png')} style={styles.IconsH}/>
                    <Text style={styles.imageText}>FREQUENCIA</Text>
            </TouchableOpacity>
        </View>
                
        <View style={styles.Content}>        
            <TouchableOpacity>
                <Image source={require('../../assets/relatorio.png')} style={styles.IconsH}/>
                    <Text style={styles.imageText}>RELATÓRIO</Text>
            </TouchableOpacity>
        </View>
           
            </ScrollView>
        </SafeAreaView>
    ) 
}

const styles = StyleSheet.create ({
    scrollViewContent: {
      alignItems: 'center',
      padding: 20
    },
    
    Content: {
        marginVertical: 70
    },
    bemVindo: {
        fontSize: 32,
        fontWeight: 'bold',
        padding: 15,
    },
    IconsH: {
        width: 215,
        height: 170, 
        marginRight: 15
    },
    imageText: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 15,
        fontWeight: 'bold'
    }
})

export default Home;