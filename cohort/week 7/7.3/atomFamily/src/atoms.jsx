

import {atomFamily} from 'recoil'
import { TODOS } from './todos'

export const todoAtomFamily = atomFamily({
    key: 'TodoAtomFamily',
    default: id =>{
        return TODOS.find(x => x.id === id)
    }
})