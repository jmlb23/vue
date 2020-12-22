import { createLogger, createStore, Store } from "vuex";
import { apiClient } from "../data/Api";
import { isOther } from "../data/Error";
import { User } from "../data/UserDTOS";

type State = { token: string | null, user?: User }

//Middleware
const createLocalPlugin = () => (store: Store<State>) => {
    store.subscribe((mutation, { token, user }) => {
        if (token !== null) {
            if (user === undefined)
                apiClient.getUser(token).then(x => isOther(x) ? store.dispatch("username", x) : x).catch(console.error);
            localStorage.setItem("token", token);
        }

    })
}

export const store: Store<State> = createStore({
    state(): State {
        return {
            token: localStorage.getItem("token"),
        }
    },
    actions: {
        token({ commit }, token: string) {
            commit("setToken", token)
        },
        username({ commit }, user: User) {
            commit("setUser", user)
        }
    }
    ,
    mutations: {
        setToken(state, payload: string): any {
            state.token = payload
        },
        setUser(state, payload: User): any {
            state.user = payload
        }
    },
    getters: {
        isLogged(state): boolean {
            return state.token !== null
        },
        token(state): string | null {
            return state.token
        },
        user(state): User | undefined {
            return state.user;
        }
    },
    plugins: [createLogger(), createLocalPlugin()],
    strict: true
})

