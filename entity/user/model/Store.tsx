import { InteractionManager } from "react-native"
import { create } from "zustand"
import { createJSONStorage, persist } from 'zustand/middleware'

import AsyncStorage from '@react-native-async-storage/async-storage';
export interface IUser {
    id: string

}

export interface IUserStore {
    user: IUser
    setUser: (user: IUser) => void
}

export interface IUserRemote extends IUser {
    socketId: string
}
export const useUserStore = create<IUserStore>()(
    persist((set) => ({
        user: { id: "" },
        setUser: (userid) => set((name) => ({ ...name, user:  userid }))
    }),
        {
            name: 'UserStorage',
            storage: createJSONStorage(() => AsyncStorage)
        },
    )
)
export default useUserStore