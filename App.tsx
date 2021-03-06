
import { Register } from './src/screens/Register';
import {ThemeProvider} from 'styled-components';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native';

import { 
 useFonts,
 Poppins_400Regular,
 Poppins_500Medium,
 Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded){
    return <AppLoading />
  }

  
  return(
   <ThemeProvider theme={theme}>
     <Register />      
   </ThemeProvider>
  )
}



