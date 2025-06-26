import { format, parseISO } from 'date-fns'
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { useEvents } from "src/store";

const EventsSection = () => {
    const { readByDate, eventosDoDia } = useEvents()
    const [selectedDate, setSelectedDate] = React.useState(new Date().toISOString().split('T')[0]);

    React.useEffect(() => {
        readByDate({ data_realizacao: selectedDate });
    }, [selectedDate]);

    // React.useEffect(() => {
    //     rest.readAll()
    // }, [])

    // console.log(rest)

    if (!eventosDoDia) return <Text className="text-center text-gray-500">Carregando eventos...</Text>;

    return (
      <View className="flex-1 bg-gray-100 relative">
        {/* Calendário */}
        <View className="mx-5 mt-5 rounded-lg shadow">
          <Calendar
            onDayPress={(day) => setSelectedDate(day.dateString)}
            markedDates={{
              [selectedDate]: { selected: true, disableTouchEvent: true, selectedColor: '#27AE60' }
            }}
            theme={{
              backgroundColor: '#FFFFFF',
              calendarBackground: '#FFFFFF',
              textSectionTitleColor: '#2C3E50',
              selectedDayBackgroundColor: '#27AE60',
              selectedDayTextColor: '#FFFFFF',
              todayTextColor: '#27AE60',
            }}
          />
        </View>

        {/* Lista de Eventos */}
        <FlatList
          className="mx-5 mt-5 flex-1"
          data={eventosDoDia.length > 0 ? eventosDoDia : []}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={() => (
            <Text className="text-center text-gray-500">Nenhum evento agendado para este dia</Text>
          )}
          renderItem={({ item }) => (
            <View className="bg-white p-4 mb-4 rounded-lg shadow">
              <View className="flex-row items-center mb-2">
                <Ionicons name="alarm" size={18} color="#2C3E50" />
                <Text className="ml-2 font-bold text-sm text-gray-800">
                  {format(parseISO(item.data_realizacao.replace("Z", "")), 'hh:mm')}
                </Text>
              </View>
              <Text className="text-xs text-gray-500 mb-2">
                {format(parseISO(item.data_realizacao.replace("Z", "")), 'dd/MM/yyyy')}
              </Text>
              <Text className="font-bold text-gray-800 mb-2">{item.descricao || 'Descrição não disponível'}</Text>
              <Text className="text-sm text-gray-600 mb-4">{item.nome}</Text>
              <TouchableOpacity className="flex-row items-center bg-primary px-3 py-2 rounded">
                <Text className="text-white font-bold mr-2">Ver documento</Text>
                <Ionicons name="document" size={18} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
}

export { EventsSection }
