import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FourthInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Higiene pessoal e cuidados sanitários</Text>
        <Image
          source={require('../../../src/assets/segunda.png')}
          style={styles.image}
        />
        <Text style={styles.paragraph}>
          A higienização pessoal é algo que está presente em nossa rotina do dia a dia, como lavar bem as mãos antes e após o uso de banheiros, para servir e tocar alimentos.
          Aos cuidados sanitários, devemos nos atentar em utilizar água limpa, tanto para higienização de alimentos, mãos e consumo para diminuir os riscos de contaminação.
        </Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FifthInfo')}>
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20, // Add some padding at the bottom for the scroll content
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
    paddingTop: 20
  },
  image: {
    width: 300,
    height: 250,
    marginBottom: 20,
    resizeMode: "cover",
    borderRadius: 10,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "justify",
    marginBottom: 20,
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: "#f29031",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    elevation: 3
  },
  secondaryButton: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default FourthInfo;
