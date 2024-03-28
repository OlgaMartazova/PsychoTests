import { useRoute } from "@react-navigation/native"
import { useEffect } from "react"
import { View, StyleSheet, Text, ActivityIndicator } from "react-native"
import { CustomContainer } from "../components/CustomContainer"
import { ButtonSize, ButtonType, CustomButton } from "../components/CustomButton"
import { useRootStore } from "../hooks/useRootStore"
import { observer } from "mobx-react"
import { TestStore } from "../modules/Test/TestStore"
import { RealmClient } from "../utils/Realmclient"
import { ProfileTable } from "../modules/Profile/ProfileModel"

export const InfoScreen = observer(({ navigation }) => {
    const route = useRoute()
    const { testName, testId } = route.params

    const { testStore } = useRootStore()

    useEffect(() => {
        navigation.setOptions({ title: testName })
    }, [testName])

    useEffect(() => {
        testStore.getTestById(testId)
        console.log("profs", RealmClient.objects(ProfileTable) == null ? "null": RealmClient.objects(ProfileTable).filter(p => p.testId == testId))
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