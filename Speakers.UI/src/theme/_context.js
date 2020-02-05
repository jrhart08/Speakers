import { createContext } from 'react';

// `useContext` annoyingly requires the original context reference while other
// methods of consuming context just require a { Consumer, Provider } object.
export default createContext();
