import { apiSAPL } from 'src/services/_sapl';
import { createBaseStore } from 'src/store'
const endPoint = '/parlamentares/legislatura/20/parlamentares'
const useVereadores = () => createBaseStore('vereador', endPoint, { api: apiSAPL, pluralRename: 'vereadores' });
export { useVereadores }
