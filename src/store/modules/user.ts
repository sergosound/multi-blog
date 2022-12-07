export type State = { id: number; name: string };

export default {
  actions: {},
  mutations: {
    changeName(state: State) {
      state.name = "Kolya";
    },
  },
  state: {
    id: 1,
    name: "Anton",
  },
  getters: {
    userName(state: State) {
      return state.name;
    },
  },
};
