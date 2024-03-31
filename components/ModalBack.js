import React from 'react';
import { Modal, Text, View, Button } from 'react-native';

const ModalBack = ({ visible, onClose, onExit }) => {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10 }}>
                    <Text>Вы хотите завершить тест без сохранения результата?</Text>
                    <Button title="Да" onPress={onExit} />
                    <Button title="Нет" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
};

export default ModalBack;
