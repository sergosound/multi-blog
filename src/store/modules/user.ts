export type State = { name: string };

export default {
  actions: {},
  mutations: {
    changeName(state: any) {
      state.name = "Kolya";
    },
  },
  state: {
    name: "Anton",
  },
  getters: {
    userName(state: State) {
      return state.name;
    },
  },
};
