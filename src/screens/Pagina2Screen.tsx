import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { RootStackParams } from '../navigators/StackNavigator';
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<RootStackParams,'Pagina2Screen'>{ };

export const Pagina2Screen = ( { navigation }: Props   )=> 
{
  //const navigation = useNavigation( );// otra forma de usar navegacion sin implementar la interface Props
  useEffect( ( )=> 
  {
    navigation.setOptions( { title:'Atrás' } );
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> 
        Pagina2Screen
      </Text>

      <Button
        title='Ir a Pagina 3'
        onPress={ ()=> navigation.navigate( 'Pagina3Screen') }
      />
    </View>
  )
}
