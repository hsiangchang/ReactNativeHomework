import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import TaskScreen from './src/screen/TaskScreen';
import TaskStatusScreen from './src/screen/TaskStatusScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

// 管理下方功能列 Bottom Tab
const Tab = createBottomTabNavigator()

// 管理推疊頁面 Component
const Stack = createStackNavigator()

// 首頁「Task 本週目標」的推疊處理
function MyTaskStatusStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={{title:'儀表版', headerShown: false}} />
      <Stack.Screen 
        name="TaskStatusScreen" 
        component={TaskStatusScreen} 
        options={{title:'我的任務'}}/>
    </Stack.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon = '' 
            if(route.name === 'MyTaskStatusStack') {
              icon = 'bag-outline'
            } else {
              icon = 'newspaper-outline'
            }
            return <Ionicons name={icon} size='25' color='black'></Ionicons>
          },
          headerStyle: {
            backgroundColor: '#6457A3'
          },
          headerTintColor: '#fff'
        })}

      >
        <Tab.Screen
          name="MyTaskStatusStack" 
          component={MyTaskStatusStack} 
          options={{ title: '儀表板' }} />
        <Tab.Screen name="TaskScreen" component={TaskScreen} options={{ title: '我的任務', tabBarBadge: 99 }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}