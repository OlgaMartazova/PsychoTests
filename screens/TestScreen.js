import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { testsMock } from '../mocks/TestsMock';
import { CustomAnswerButton } from '../components/CustomAnswerButton';
import { ButtonSize, ButtonType } from '../components/CustomButton';


export const TestScreen = ({ navigation }) => {
    const route = useRoute()
    const { testName } = route.params

    useEffect(() => {
        navigation.setOptions({ title: testName })
    }, [testName])

    const handleTestPress = (testName) => {
        navigation.navigate('Result', { testName })
    }

    const testList = testsMock

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{testList[0].questions[0].text}</Text>
            {testList ? (
                <FlatList
                    data={testList[0].questions[0].answers}
                    renderItem={({ item }) => (
                        <CustomAnswerButton
                            title={item.text}
                            size={ButtonSize.Medium}
                            type={ButtonType.Secondary}
                            onPress={() => {
                                handleTestPress(testName)
                            }} />
                    )} />
            ) : (
                <ActivityIndicator />
            )}
        </View>
    )
}

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