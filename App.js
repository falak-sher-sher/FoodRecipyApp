
import AppNavigation from "./navigation/AppNavigaion";
import "./global.css"
import { Provider } from 'react-redux'
import { store } from "./store";
export default function App(){
  return(
    <Provider store={store}> 
   <AppNavigation/>
   </Provider>
  )
}