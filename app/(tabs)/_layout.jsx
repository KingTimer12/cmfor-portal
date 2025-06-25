import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#009b91' }}>
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house" color={color} />,
            }}
        />
        <Tabs.Screen
            name="legislativo/index"
            options={{
                title: 'Legislativo',
                tabBarIcon: ({ color }) => <MaterialIcons size={28} name="gavel" color={color} />,
            }}
        />
        <Tabs.Screen
            name="legislativo/vereadores"
            options={{
                href: null,
            }}
        />
        <Tabs.Screen
            name="legislativo/comissoes"
            options={{
                href: null,
            }}
        />
        <Tabs.Screen
            name="comunicacao/index"
            options={{
                title: 'Comunicação',
                tabBarIcon: ({ color }) => <MaterialIcons size={28} name="message" color={color} />,
            }}
        />
        <Tabs.Screen
            name="comunicacao/comunicacao-social"
            options={{
                href: null,
            }}
        />
        <Tabs.Screen
            name="comunicacao/radio-fortaleza"
            options={{
                href: null,
            }}
        />
        <Tabs.Screen
            name="comunicacao/camara-noticias"
            options={{
                href: null,
            }}
        />
        <Tabs.Screen
            name="comunicacao/projetos-especiais"
            options={{
                href: null,
            }}
        />
        <Tabs.Screen
            name="comunicacao/publicacoes"
            options={{
                href: null,
            }}
        />
        <Tabs.Screen
            name="comunicacao/revista-nossa-voz"
            options={{
                href: null,
            }}
        />
        <Tabs.Screen
            name="comunicacao/tv-camara"
            options={{
                href: null,
            }}
        />
        <Tabs.Screen
            name="cidadao/index"
            options={{
                title: 'Cidadão',
                tabBarIcon: ({ color }) => <MaterialIcons size={28} name="person" color={color} />,
            }}
        />
    </Tabs>
);
}
