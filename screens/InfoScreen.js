import { useRoute } from "@react-navigation/native"
import { useEffect } from "react"
import { testsMock } from "../mocks/TestsMock"
import { View, StyleSheet, Text } from "react-native"
import { CustomContainer } from "../components/CustomContainer"
import { ButtonSize, ButtonType, CustomButton } from "../components/CustomButton"
import { RealmClient } from "../utils/Realmclient"
import { TestTable } from "../modules/Test/TestModel"

export const InfoScreen = ({ navigation }) => {
    const route = useRoute()
    const { testName, testId } = route.params

    useEffect(() => {
        navigation.setOptions({ title: testName })
        console.log("realm check", RealmClient.objects(TestTable))
    }, [testName])

    const handleTestPress = (testName, testId) => {
        navigation.navigate('Test', { testName, testId })
    }

    const testList = testsMock

    return (
        <View style={styles.container}>
            <CustomContainer>
                <Text style={styles.title}>{testList[testId].name}</Text>
                <Text>{testList[testId].description}</Text>
                <CustomButton
                    title={'Начать'}
                    size={ButtonSize.Medium}
                    type={ButtonType.Secondary}
                    onPress={() => {
                        handleTestPress(testName, testId)
                    }}
                />
            </CustomContainer>
        </View>
    )
}

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