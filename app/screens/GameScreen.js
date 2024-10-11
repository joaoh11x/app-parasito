import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, Modal, Animated } from 'react-native';
import { COLORS, SIZES } from '../constants';
import data from '../data/QuizData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { ScrollView } from 'react-native';


export default function GameScreen() {

    const allQuestions = data;
    const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
    const [currentOptionSelected, setcurrentOptionSelected] = useState(null);
    const [correctOption, setcorrectOption] = useState(null);
    const [isOptionsDisabled, setisOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0);
    const [showNextButton, setshowNextButton] = useState(false);
    const [showScoreModal, setshowScoreModal] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    const startGame = () => {
        setGameStarted(true);
    };

    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setcurrentOptionSelected(selectedOption);
        setcorrectOption(correct_option);
        setisOptionsDisabled(true);
        if (selectedOption == correct_option) {
            setScore(score + 1)
        }
        setshowNextButton(true)
    }

    const handleNext = () => {
        if (currentQuestionIndex == allQuestions.length - 1) {
            setshowScoreModal(true);
        } else {
            setcurrentQuestionIndex(currentQuestionIndex + 1);
            setcurrentOptionSelected(null);
            setcorrectOption(null);
            setisOptionsDisabled(false);
            setshowNextButton(false);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex + 1,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }

    const restartQuiz = () => {
        setshowScoreModal(false);

        setcurrentQuestionIndex(0);
        setScore(0);

        setcurrentOptionSelected(null);
        setcorrectOption(null);
        setisOptionsDisabled(false);
        setshowNextButton(false);

        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }

    const renderQuestion = () => {
        return (
            <View style={{
                marginVertical: 15
            }}>
                {/* Contador de Questoes */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}>
                    <Text style={{ color: COLORS.black, fontSize: 20, opacity: 0.6, marginRight: 2 }}>{currentQuestionIndex + 1}</Text>
                    <Text style={{ color: COLORS.black, fontSize: 18, opacity: 0.6 }}>/ {allQuestions.length}</Text>
                </View>

                {/*Questoes*/}

                <Text style={{
                    color: COLORS.black,
                    fontSize: 30,

                }}>{allQuestions[currentQuestionIndex]?.question}</Text>
            </View>
        );
    }

    const renderOptions = () => {
        return (
            <ScrollView>
                {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity
                            onPress={() => validateAnswer(option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            style={{
                                borderWidth: 3,
                                borderColor: option == correctOption
                                    ? COLORS.success :
                                    option == currentOptionSelected
                                        ? COLORS.error :
                                        COLORS.secondary + '40',
                                backgroundColor: option == correctOption
                                    ? COLORS.success + '90' :
                                    option == currentOptionSelected
                                        ? COLORS.error + '90' :
                                        COLORS.secondary,
                                height: 75,
                                borderRadius: 20,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: 20,
                                marginVertical: 10
                            }}
                        >
                            <Text style={{
                                fontSize: 18,
                                color: COLORS.white
                            }}>{option}</Text>

                            {/* Verificação de resposta correta ou errada*/}
                            {
                                option == correctOption ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30 / 2,
                                        backgroundColor: COLORS.success,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="check" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ) : option == currentOptionSelected ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30 / 2,
                                        backgroundColor: COLORS.error,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="close" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ) : null
                            }

                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        );
    }

    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%', '100%']
    })
    const renderProgressBar = () => {
        return (
            <View style={{
                width: '100%',
                height: 20,
                borderRadius: 20,
                backgroundColor: '#00000020',

            }}>
                <Animated.View style={[{
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: COLORS.accent
                }, {
                    width: progressAnim
                }]}>

                </Animated.View>
            </View>
        );
    }

    renderNextButton = () => {
        if (showNextButton) {
            return (
                <TouchableOpacity
                    onPress={handleNext}
                    style={{
                        marginTop: 20, width: '100%', backgroundColor: COLORS.accent, padding: 20, borderRadius: 5
                    }}>
                    <Text style={{
                        fontSize: 20, color: COLORS.white, textAlign: 'center'
                    }}>Próximo</Text>
                </TouchableOpacity>
            );
        } else {
            return null;
        }
    }

    return (
        <View style={{
            flex: 1,
        }}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.primary} />
            {!gameStarted ? (
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff'
                }}>
                    <Text style={{
                            fontSize: 28,
                            textAlign: 'center',
                            fontWeight: 'bold',
                            marginBottom: 25
                        }}>Testando seus conhecimentos</Text>
                    <Image
                            source={require('../../src/assets/img2.png')}
                            style={{
                                width: 300,
                                height: 300,
                                borderRadius: 10,
                                marginBottom: 20,
                            }}
                            resizeMode="cover"
                        />
                    <View style={{
                        width: '90%',
                        padding: 10,
                        marginBottom: 20,
                        borderRadius: 8
                    }}>
                        <Text style={{
                            textAlign: 'justify',
                            fontSize: 16,
                        }}>
                            Este quiz interativo irá testar seus conhecimentos sobre o parasita <Text style={{ fontStyle: 'italic' }}>Entamoeba coli</Text>!
                            Prepare-se para mergulhar no mundo microscópico e descobrir fatos fascinantes sobre ele.</Text>
                    </View>
                    <TouchableOpacity style={{
                        backgroundColor: '#f29031',
                        padding: 15,
                        borderRadius: 8,
                        elevation: 3,
                    }} onPress={startGame}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 18,
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}>Vamos Começar</Text>
                    </TouchableOpacity>
                </View>
            ) :
                <View style={{
                    flex: 1,
                    paddingVertical: 60, //arrumar aqui
                    paddingHorizontal: 16,
                    backgroundColor: COLORS.background,
                    position: 'relative'
                }}>

                    {/* Barra de Progresso */}
                    {renderProgressBar()}

                    {/* Questões */}
                    {renderQuestion()}

                    {/* Opções */}
                    {renderOptions()}

                    {/* Botão Proximo */}
                    {renderNextButton()}

                    {/* Modal de Score */}

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={showScoreModal}
                    >
                        <View style={{
                            flex: 1,
                            backgroundColor: "#fff",
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>

                            <View style={{
                                backgroundColor: "#fff",
                                width: '90%',
                                borderRadius: 20,
                                padding: 20,
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    alignItems: 'center',
                                    backgroundColor: COLORS.accent,
                                    borderRadius: 20,
                                    marginBottom: 30,
                                    padding: 15,
                                    borderWidth: 2,
                                    borderColor: COLORS.accent
                                }}>
                                    <View style={{
                                        backgroundColor: COLORS.white,
                                        alignItems: 'center',
                                        borderRadius: 20,
                                        paddingHorizontal: '10%',
                                    }}>
                                        {score > (allQuestions.length / 2) ? (
                                            <Image
                                                style={{
                                                    height: 130,
                                                    width: 130,
                                                    margin: 15
                                                }}
                                                source={require('../assets/images/trofeu.png')}
                                            />
                                        ) : (
                                            <Image
                                                style={{
                                                    height: 130,
                                                    width: 130,
                                                    margin: 15
                                                }}
                                                source={require('../assets/images/fail.png')}
                                            />
                                        )}
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: COLORS.black }}>{score > (allQuestions.length / 2) ? (
                                            <Text>
                                                <Text style={{
                                                    fontSize: 44,
                                                }}>Parabéns!</Text>{'\n'}Parabéns! Esperamos que você tenha aprendido bastante sobre o{' '}
                                                <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Entamoeba coli</Text>!
                                            </Text>
                                        ) : <Text>
                                            <Text style={{
                                                fontSize: 44,
                                            }}>Poxa!</Text>{'\n'}Talvez seja necessário revisar os conceitos relacionados ao parasita{' '}
                                            <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Entamoeba coli</Text>.
                                        </Text>}</Text>

                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            marginVertical: 20,
                                        }}>
                                            <Text style={{
                                                fontSize: 30,
                                                color: score > (allQuestions.length / 2) ? COLORS.success : COLORS.error
                                            }}>{score} </Text>
                                            <Text style={{
                                                fontSize: 20,
                                                color: COLORS.black
                                            }}>/ {allQuestions.length}</Text>
                                        </View>
                                    </View>
                                </View>

                                {/* Botao Recomeçar QUiz */}
                                <TouchableOpacity
                                    onPress={restartQuiz}
                                    style={{
                                        backgroundColor: COLORS.accent,
                                        padding: 20, width: '100%', borderRadius: 20,
                                    }}>
                                    <Text style={{
                                        textAlign: 'center', color: COLORS.white, fontSize: 20
                                    }}>Recomeçar Quiz</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </Modal>

                    {/* Talvez BackgroundImage */}
                    <Image
                        source={require('../assets/images/DottedBG.png')}
                        style={{
                            width: SIZES.width,
                            height: 55,
                            zIndex: -1,
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            opacity: 0.5
                        }}
                        resizeMode='contain'
                    />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({

});

