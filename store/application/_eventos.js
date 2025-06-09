import { useBase } from 'src/store'
const useEventos = () => useBase('evento', '/legislativo/eventos'); // ✅ Chamada correta
export { useEventos }