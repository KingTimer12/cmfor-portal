import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house" color={color} />,
        }}
      />
      <Tabs.Screen
        name="legislativo"
        options={{
          title: 'Legislativo',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="gavel" color={color} />,
        }}
      />
      <Tabs.Screen
        name="comunicacao"
        options={{
          title: 'Comunicação',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="message" color={color} />,
        }}
      />
      <Tabs.Screen
        name="cidadao"
        options={{
          title: 'Cidadão',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
