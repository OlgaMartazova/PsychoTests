import { useNavigation } from "@react-navigation/native"
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native"
import { ButtonSize, ButtonType, CustomButton } from "../components/CustomButton"
import { useEffect } from "react"
import { useRootStore } from "../hooks/useRootStore"
import { observer } from "mobx-react"

export const ListScreen = observer(() => {
    const navigation = useNavigation()

    const { testStore } = useRootStore()

    useEffect(() => {
        testStore.getTests()
    }, [])

    const handleTestPress = (testName, testId) => {
        navigation.navigate('Info', { testName, testId })
    }

    return (
        <View style={styles.container}>
            {testStore.loading ?  (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={testStore.tests}
                    renderItem={({ item }) => (
                        <CustomButton
                            title={item.name}
                            size={ButtonSize.Medium}
                            type={ButtonType.Primary}
                            onPress={() => {
                                handleTestPress(item.name, item.id)
                            }} />
                    )}
                />
            )}
        </View>
    );

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
});