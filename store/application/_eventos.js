import { createBaseStore } from 'src/store'
const useEventos = () => createBaseStore('evento', '/legislativo/eventos');
export { useEventos }