import {NavigationActions} from 'react-navigation'
let navigator;

// This will allow use of navigation in context
export const setNavigator = (nav) =>{
  navigator = nav
}

export const navigate=(routeName,params)=>{
  navigator.dispatch(
    NavigationActions.navigate({
      routeName: routeName,
      params: params
    })
  )
}