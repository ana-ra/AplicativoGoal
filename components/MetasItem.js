import React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';


function MetasItem (props) {
    
    return ( 
            <View style={styles.glItem}> 
            <Pressable android_ripple={{color:'#210644'}}
             onPress={props.onDeleteMeta.bind(this, props.id)}
             style={({pressed}) => pressed && styles.pressedItem}>
                <Text style={styles.glTexto}>{props.text}</Text>
            </Pressable>
            </View>
    )
};

export default MetasItem;

const styles = StyleSheet.create({
    glItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: 'black',
        colort: 'white',
      }, 
      pressedItem: {
          opacity: 0.5

      },
      glTexto: {
        color: 'white',
        padding: 8,

      },

})