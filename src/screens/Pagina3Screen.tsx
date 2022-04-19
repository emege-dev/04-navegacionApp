import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { RootStackParams } from '../navigators/StackNavigator'
import { styles } from '../theme/appTheme'


interface Props extends StackScreenProps<RootStackParams,'Pagina3Screen'>{ };

export const Pagina3Screen = (  { navigation }: Props  )=> 
{
  //const navigation = useNavigation( ); otra forma de usar navegacion sin implementar la interface Props
  useEffect( ( )=> 
  {
    navigation.setOptions( { title:'Atrás' } );
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> 
        Pagina3Screen
      </Text>

      <Button
        title='Regresar'
        onPress={ ( )=> navigation.pop( ) }
      />
      <Button
        title='Ir a Pagina 1'
        onPress={ ( )=> navigation.popToTop( ) }
      />
    </View>
  )
}
