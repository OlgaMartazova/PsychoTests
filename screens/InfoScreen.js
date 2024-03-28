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
        testStore.getProfile(testId)
        if (!testStore.loading && testStore.profile.length > 0) {
            testStore.getProfileData()
        }
    }, [])

    const handleTestPress = (testName, testId) => {
        navigation.navigate('Test', { testName, testId })
    }

    const handleReTestPress = (testName, testId) => {
        testStore.deleteProfile()
        navigation.navigate('Test', { testName, testId })
    }

    return (
        <View style={styles.container}>
            {testStore.loading || testStore.test == null ? (
                <ActivityIndicator />
            ) : (
                <CustomContainer>
                    {testStore.profile.length == 0 ? (
                        <>
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
                        </>
                    ) : (
                        <>
                            <Text style={styles.title}>{testStore.test.name}</Text>
                            <Text>{testStore.profileData}</Text>
                            <CustomButton
                                title={'Пройти тест заново'}
                                size={ButtonSize.Medium}
                                type={ButtonType.Secondary}
                                onPress={() => {
                                    handleReTestPress(testName, testId)
                                }}
                            />
                        </>
                    )}
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