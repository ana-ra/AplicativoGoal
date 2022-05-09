import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, Image } from 'react-native';
import MetasItem from './components/MetasItem';
import MetasInput from './components/MetasInput';


export default () => {
  const[modalIsVisible, setModalIsVisible] = useState(false);
  const [usuarioMetas, setUsuarioMetas] = useState([]);

  function startAddMetaHandler(){
    setModalIsVisible(true);
  }

  function endAddMetaHandler(){
    setModalIsVisible(false);
  }


  function adicionar(enteredText) {
    setUsuarioMetas(ctUsuarioMetas => [
      ...ctUsuarioMetas,
       { text: enteredText, id: Math.random().toString() },
      ]);
      endAddMetaHandler();
  };

  function deleteMetaHandler(id){
    setUsuarioMetas(ctUsuarioMetas =>{
      return ctUsuarioMetas.filter((metas) => metas.id !== id);
    });
  }




  return (
    <View style={styles.appContainer}>
       <Button 
        title="Adicionar uma nova meta" 
        color="black" 
        onPress={startAddMetaHandler} />

      <MetasInput
       visible={modalIsVisible} 
       onAddMeta={adicionar} 
       cancelar={endAddMetaHandler}/>
      
  
      <View style={styles.glContainer}>
        <FlatList
           data={usuarioMetas}
          renderItem={(itemData) => { 
            return(
              <MetasItem
               text={itemData.item.text} 
               id={itemData.item.id}
               onDeleteMeta={deleteMetaHandler}/> 
            ) 
             }}
          keyExtractor={(item, index) => { 
            return item.id;
          }}
          
        />        
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

    appContainer: {
      flex: 1,
      padding: 50,
    },
  
    inputContainer: {
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 24,
      borderBottom: 1,
      borderBottomColor: '#cccccc'
    },
    
    textInput: {
      borderWidth:1,
      borderColor: '#cccccc',
      width: '70%',
      marginRight: 8,
      padding: 8,
    },
  
    glContainer: {
      flex: 3,
    },
  
  })
  