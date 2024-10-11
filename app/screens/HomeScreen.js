import * as React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function HomeScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Conhecendo <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Entamoeba coli</Text></Text>
      <Image
        source={require('../../src/assets/img1.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.infoText}>
        Bem-vindo ao nosso aplicativo informativo sobre o fascinante mundo dos parasitas!
        Aqui, as crianças terão a oportunidade de aprender sobre um parasita chamado <Text style={{ fontStyle: 'italic' }}>Entamoeba coli</Text> de uma maneira interativa e divertida.
      </Text>
      <Text style={styles.subtitle}>O que iremos aprender?</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoItem}>• O que é o parasita <Text style={{ fontStyle: 'italic' }}>Entamoeba coli</Text>?</Text>
        <Text style={styles.infoItem}>• Como o parasita é transmitido?</Text>
        <Text style={styles.infoItem}>• Higiene pessoal e cuidados.</Text>
        <Text style={styles.infoItem}>• Sintomas da infecção.</Text>
        <Text style={styles.infoItem}>• Recomendações.</Text>
      </View>

      {/*<TouchableOpacity style={styles.btnNext} onPress={() => navigation.navigate('Estudos')}>
        <Text style={styles.txtButton}>Iniciar a Jornada</Text>
        <AntDesign style={styles.iconBtn} name="rightcircle" size={24} color="black" />
  </TouchableOpacity>*/}

      <Text style={styles.disclaimerText}>
        Lembre-se sempre de consultar profissionais de saúde qualificados para obter orientações
        específicas sobre diagnóstico, tratamento e prevenção de doenças relacionadas a parasitas.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  infoItem: {
    fontSize: 16,
    marginBottom: 10,
  },
  disclaimerText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  btnNext: {
    backgroundColor: '#f29031',
    flexDirection: 'row',
    padding: 10,
    width: '70%',
    height: 50,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3
  },
  txtButton: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 10
  },
  iconBtn: {
    position: 'absolute',
    color: '#fff',
    right: 10
  },
});
