import { createLogger, createStore, Store } from "vuex";
import { apiClient } from "../data/Api";
import { isOther } from "../data/Error";
import { User } from "../data/UserDTOS";
import { router } from "../routes";

type State = { token?: string, user?: User }

//Middleware
const createLocalPlugin = () => (store: Store<State>) => {
    store.subscribe((mutation, { token, user }) => {
        if (token !== undefined) {
            if (user === undefined) {
                apiClient.getUser(token).then(x => isOther(x) ? store.dispatch("user", x) : x).catch(console.error);
            }
            localStorage.setItem("token", token);
        }
        if (mutation.type === "logout") localStorage.removeItem("token")
    })
}

const redirectPlugin = () => (store: Store<State>) => {
    store.subscribe((mutation, { token, user }) => {
        if (token !== null) {
            router.push("/");
        }

    })
}


const state = () => ({ token: localStorage.getItem("token") ?? undefined, user: undefined })

export const store: Store<State> = createStore({
    state(): State {
        return state();
    },
    actions: {
        logout({ commit }) {
            commit("logout", undefined)
        },
        token({ commit }, token: string) {
            commit("setToken", token)
        },
        user({ commit }, user: User) {
            commit("setUser", user)
        }
    }
    ,
    mutations: {
        logout(state): any {
            state.token = undefined
        },
        setToken(state, payload: string): any {
            state.token = payload
        },
        setUser(state, payload: User): any {
            state.user = payload
        }
    },
    getters: {
        isLogged(state): boolean {
            return state.token !== undefined
        },
        token(state): string | undefined {
            return state.token
        },
        user(state): User | undefined {
            return state.user;
        }
    },
    plugins: [createLogger(), createLocalPlugin(), redirectPlugin()],
    strict: true
});


export {
    State,
}
