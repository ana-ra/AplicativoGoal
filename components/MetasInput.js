import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, Modal, Image} from 'react-native'


function MetasInput(props) {
    const[enteredText, setEnteredText] = useState('');

    function addMetasHandler() {
        props.onAddMeta(enteredText);
        setEnteredText('');
      }


    return (
      <Modal visible={props.visible} animationType="slide"> 
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/u.png')} /> 
        <TextInput
          placeholder="Nome" 
          style={styles.textInput}
          value={enteredText}
          onChangeText={setEnteredText}/>


        <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Adicionar"
              color='green'
                onPress={addMetasHandler}/>
            </View>

            <View style={styles.button}>
              <Button title="Cancelar"
                color='green'
                onPress={props.cancelar} />
            </View>

        </View>

      </View>
    </Modal>

    )
}

export default MetasInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 24,
        padding: 12,
        borderBottom: 1,
        borderBottomColor: '#cccccc'
      },
      
      textInput: {
        borderWidth:1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
      },

      buttonContainer:{
        flexDirection: 'row',
        padding: 5,
        marginTop: 16,
      },

      button:{
        width:100,
        marginHorizontal: 8,
        borderRadius: 2,
      },
      image :{
        width: 200,
        height: 200,
        margin: 20
      }
})