import { useRoute } from "@react-navigation/native"
import { useEffect } from "react"
import {ButtonSize, ButtonType, CustomButton} from "../components/CustomButton";
import { View, StyleSheet, Text, TouchableOpacity, TextInput, FlatList, SafeAreaView, ActivityIndicator, ScrollView } from 'react-native';
import {testsMock} from "../mocks/TestsMock";
import { CustomContainer } from "../components/CustomContainer";


export const ResultScreen = ({ navigation }) => {
    const route = useRoute()
    const { testName } = route.params

    useEffect(() => {
        navigation.setOptions({ title: testName });
    }, [testName])

    const handleTestPress = () => {
        navigation.navigate('Психологические тесты');
    };

    const testList = testsMock;

    return (
        <View style={styles.container}>
            <CustomContainer>
                <Text style={styles.title}>Ваш результат:</Text>
                <Text>{testList[0].results[0].title}</Text>
                <Text>{testList[0].results[0].description}</Text>
                <CustomButton
                    title={'На главную'}
                    size={ButtonSize.Medium}
                    type={ButtonType.Secondary}
                    onPress={() => {
                        handleTestPress()
                    }}
                />
            </CustomContainer>
        </View>
    );
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
})