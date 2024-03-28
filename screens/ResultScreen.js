import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { ButtonSize, ButtonType, CustomButton } from "../components/CustomButton";
import { View, StyleSheet, Text, TouchableOpacity, TextInput, FlatList, SafeAreaView, ActivityIndicator, ScrollView } from 'react-native';
import { testsMock } from "../mocks/TestsMock";
import { CustomContainer } from "../components/CustomContainer";
import { observer } from "mobx-react";
import { useRootStore } from "../hooks/useRootStore";


export const ResultScreen = observer(({ navigation }) => {
    const route = useRoute()
    const { testName, testId, score } = route.params
    const { testStore } = useRootStore()

    useEffect(() => {
        navigation.setOptions({ title: testName });
    }, [testName])

    useEffect(() => {
        testStore.addProfile(score, testId)
        testStore.chooseResult(score, testId)
    }, [])

    const handleTestPress = () => {
        navigation.navigate('Психологические тесты');
    };

    return (
        <View style={styles.container}>
            {testStore.loading || testStore.selectedResult == null ? (
                <ActivityIndicator />
            ) : (
                <CustomContainer>
                    <Text style={styles.title}>Ваш результат:</Text>
                    <Text>{testStore.selectedResult.title}</Text>
                    <Text>{testStore.selectedResult.description}</Text>
                    <CustomButton
                        title={'На главную'}
                        size={ButtonSize.Medium}
                        type={ButtonType.Secondary}
                        onPress={() => {
                            handleTestPress()
                        }}
                    />
                </CustomContainer>
            )}
        </View>
    );
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
})