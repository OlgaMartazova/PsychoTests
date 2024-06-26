import { observer } from 'mobx-react';
import { SafeAreaView, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { useRootStore } from '../hooks/useRootStore';
import { useEffect } from 'react';


export const InitScreen = observer(({ navigation }) => {

    const { initStore } = useRootStore()

    useEffect(() => {
        (async () => {
            const isFirstTime = await initStore.getFlag()
            console.log("isFirstTime", isFirstTime)
            if (isFirstTime) {
                initStore.setFlag(false)
                initStore.populateDatabase()
                navigation.navigate('Психологические тесты')
            }
            else {
                navigation.navigate('Психологические тесты')
            }
        })()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ActivityIndicator style={styles.loader} />
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})