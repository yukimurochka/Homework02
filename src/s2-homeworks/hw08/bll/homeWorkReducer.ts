import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let stateCopy = [...state]
            return  action.payload === 'up'
                ? stateCopy.sort((a, b) => a.name > b.name ? 1 : -1)
                : stateCopy.sort((a, b) => a.name < b.name ? 1 : -1)
        }
        case 'check': {
            return state.filter( user => user.age >= action.payload ) // need to fix
        }
        default:
            return state
    }
}
