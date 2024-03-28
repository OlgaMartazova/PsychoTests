import { useRoute } from "@react-navigation/native"
import { useEffect } from "react"
import { View, StyleSheet, Text, ActivityIndicator } from "react-native"
import { CustomContainer } from "../components/CustomContainer"
import { ButtonSize, ButtonType, CustomButton } from "../components/CustomButton"
import { useRootStore } from "../hooks/useRootStore"
import { observer } from "mobx-react"
import QuestionModel from "../modules/Question/QuestionModel"
import { TestTable } from "../modules/Test/TestModel"
import { RealmClient } from "../utils/Realmclient"

export const InfoScreen = observer(({ navigation }) => {
    const route = useRoute()
    const { testName, testId } = route.params

    const { testStore } = useRootStore()

    useEffect(() => {
        navigation.setOptions({ title: testName })
    }, [testName])

    useEffect(() => {
        testStore.getTestById(testId)
    }, [])

    const handleTestPress = (testName, testId) => {
        navigation.navigate('Test', { testName, testId })
    }

    return (
        <View style={styles.container}>
            {testStore.loading || testStore.test == null ? (
                <ActivityIndicator />
            ) : (
                <CustomContainer>
                    <Text style={styles.title}>{testStore.test.name}</Text>
                    <Text>{testStore.test.description}</Text>
                    <CustomButton
                        title={'Начать'}
                        size={ButtonSize.Medium}
                        type={ButtonType.Secondary}
                        onPress={() => {
                            handleTestPress(testName, testId)
                        }}
                    />
                </CustomContainer>
            )}
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    title: {
        fontWeight: 'bold'
    }
});