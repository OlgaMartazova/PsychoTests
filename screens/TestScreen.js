import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { CustomAnswerButton } from '../components/CustomAnswerButton';
import { ButtonSize, ButtonType } from '../components/CustomButton';
import { observer } from 'mobx-react';
import { useRootStore } from '../hooks/useRootStore';


export const TestScreen = observer(({ navigation }) => {
    const route = useRoute()
    const { testName, testId } = route.params
    const { testStore } = useRootStore()

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [isTestComplete, setIsTestComplete] = useState(false)

    useEffect(() => {
        navigation.setOptions({ title: testName })
    }, [testName])

    useEffect(() => {
        console.log(currentQuestionIndex)
    }, [currentQuestionIndex]);

    useEffect(() => {
        if (isTestComplete) {
            navigation.navigate('Result', { testName, testId });
        }
    }, [isTestComplete]);

    useEffect(() => {
        testStore.getTestById(testId)
    }, [])

    const handleQuestionPress = () => {
        if (currentQuestionIndex + 1 === testStore.test.questions.length) {
            setIsTestComplete(true)
        }
        if (!isTestComplete) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
    };

    return (
        <View style={styles.container}>
            {!testStore.loading && testStore.test != null && !isTestComplete ? (
                <>
                    <Text style={styles.title}>{testStore.test.questions[currentQuestionIndex].question}</Text>
                    <FlatList
                        data={testStore.test.questions[currentQuestionIndex].answers}
                        renderItem={({item}) => (
                            <CustomAnswerButton
                                title={item.answer}
                                size={ButtonSize.Medium}
                                type={ButtonType.Secondary}
                                onPress={() => {
                                    handleQuestionPress(testName, testId)
                                }}
                            />
                        )}
                    />
                </>
            ) : (
                <ActivityIndicator />
            )}
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
});