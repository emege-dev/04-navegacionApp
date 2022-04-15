import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<any,any>{ };

export const Pagina1Screen = ( { navigation }: Props )=> 
{
  return (
    <View style= { styles.globalMargin }>
        <Text style={styles.title}> 
            Pagina1Screen
        </Text>   
        <Button 
            title='Ir a Pagina 2'
            onPress={ ( )=> navigation.navigate( 'Pagina2Screen' ) }
        />  
        {/* <Button 
            title='Ir a PersonaScreen '
            onPress={ ( )=> navigation.navigate( 'PersonaScreen' ) }
        />           */}


        <Text> 
            Navegar con argumentos
        </Text>  
        <TouchableOpacity onPress={ ( )=> navigation.navigate( 'PersonaScreen' , {id:1, nombre: 'Pedro'}) }>
            <Text> 
               Pedrin
            </Text> 
        </TouchableOpacity>

    </View>
  )
}
