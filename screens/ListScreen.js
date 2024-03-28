import { useNavigation } from "@react-navigation/native"
import { testsMock } from "../mocks/TestsMock"
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native"
import { ButtonSize, ButtonType, CustomButton } from "../components/CustomButton"

export const ListScreen = () => {
    const navigation = useNavigation()

    const testList = testsMock

    const handleTestPress = (testName, testId) => {
        navigation.navigate('Info', { testName, testId })
    }

    return (
        <View style={styles.container}>
            {testList ? (
                <FlatList
                    data={testList}
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
            ) : (
                <ActivityIndicator />
            )}
        </View>
    );

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
});