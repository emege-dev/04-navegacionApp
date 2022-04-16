import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { RootStackParams } from '../navigators/StackNavigator';
import { styles } from '../theme/appTheme';

// interface RouterParams 
// {
//     id:number,
//     nombre:string
// }

interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{ };

export const PersonaScreen = ( { navigation, route } :Props )=> 
{
  //const params = route.params as RouterParams;
  const params = route.params
  useEffect( ( )=> 
  {
    navigation.setOptions( { title: params.nombre } );
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
