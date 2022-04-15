import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<any,any>{ };

export const PersonaScreen = ( { navigation, route } :Props )=> 
{
  const params = route.params;

  useEffect( ( )=> 
  {
    navigation.setOptions( { title: params!.nombre } );
  }, [])

  return (
    <View style= {styles.globalMargin }>
        <Text  style= {styles.title }>
            {
                JSON.stringify( params, null, 2)
            }
        </Text>
    <Button
        title='Ir a Pagina 1'
        onPress={ ()=> navigation.popToTop( ) }
    />
    </View>
  );
}
