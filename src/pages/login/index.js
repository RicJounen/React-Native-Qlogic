import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Home from "../home";


function Login () {

    const navigation = useNavigation();
  const [Usuario, setUsuario] = React.useState('');
  const [Senha, setSenha] = React.useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui (exemplo simples)
    if (Usuario === 'Usuario' && Senha === '1234') {
        // Autenticação bem-sucedida, navegue para a próxima tela
        navigation.navigate('Home');
      } else {
        // Exibir mensagem de erro ou tomar outra ação em caso de falha na autenticação
        alert('Credenciais inválidas');
      }
    };

    return (
     <View style={styles.Content}>
        <View style={styles.Container}>
                <Text style={styles.Title}>Login</Text>
                <TextInput style={styles.Input1}
                placeholder="Usuario"
                onChangeText={setUsuario}
                value={Usuario}
                />
                <TextInput style={styles.Input2}
                placeholder="Senha"
                onChangeText={setSenha}
                value={1234}
                keyboardType="numeric"
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={{textAlign: 'center', color: '#FFF', fontSize: 16}}>Entrar</Text>
                </TouchableOpacity>
        </View>
     </View>
    )
}

    const styles = StyleSheet.create ({
        Content: {
            flex: 1,
            backgroundColor: '#F1F1F1',
            justifyContent: 'center',
            alignItems: 'center'
        },
        Container: {
            alignItems: 'center',
            width: 325,
            height: 500,
            borderWidth: 0.5,
            backgroundColor: 'white',
            borderRadius: 7,
        },
        Input1: {
            borderWidth: 1,
            height: 35,
            width: '80%',
            textAlign: 'center',
            backgroundColor: '#F7F7F7',
            marginBottom: 30,  
            borderRadius: 7.5, 
        },
        Input2: {
            borderWidth: 1,
            height: 35,
            width: '80%',
            textAlign: 'center',
            backgroundColor: '#F7F7F7',
            borderRadius: 7.5,
        },
        Title: {
            fontSize: 25,
            padding: 50
        },
        button: {
            borderWidth: 0.5,
            borderRadius: 7,
            height: 30,
            width: '70%',
            marginTop: 25,
            backgroundColor: '#00009c',
            justifyContent: 'center',
        }
        
    })

export default Login;