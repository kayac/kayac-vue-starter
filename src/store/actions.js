export const increment = ({ commit }, val = 1) => {
  commit("increment", val);
};
