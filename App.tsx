import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import RootNavigation from './src/navigation';
import { useFonts } from 'expo-font';
import { Provider as PaperProvider } from 'react-native-paper';
export default function App() {
  const [fontsLoaded] = useFonts({
    'swissraCondensedNormal': require('./src/assets/fonts/Swissra-Condensed-Normal-1.otf'),
    'MadaniRegular': require('./src/assets/fonts/alfont_com_Madani-Arabic-Regular-1.ttf'),
    'Almarai': require('./src/assets/fonts/Almarai.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
    },
  };
  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar style="auto" />
      <PaperProvider>
        <RootNavigation />
      </PaperProvider>
    </NavigationContainer>
  );
}
