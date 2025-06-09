import { createBaseStore } from 'src/store'
const useEventos = () => createBaseStore('evento', '/legislativo/eventos'); // ✅ Chamada correta
export { useEventos }