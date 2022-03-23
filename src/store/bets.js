import bets from "@/data/bets";
import axios from "axios";
const state = {
  bet: {},
  bets: [],
};

/* -------------------------------------- GETTERS -------------------------------------- */
const getters = {
  getBets: (state) => state.bets,

  getBet: (state) => state.bet,
};

/* -------------------------------------- MUTATIONS -------------------------------------- */
const mutations = {
  setBets: (state, bets) => (state.bets = bets),

  setBet: (state, bet) => (state.bet = bet),

  clearBet(state) {
    state.bet = {};
  },

  addBet(state, text) {
    state.bets = [text, ...state.bets];
  },

  updateBet(state, bet) {
    state.bets = [
      ...state.bets.map((item) =>
        item._id !== bet._id
          ? item
          : {
              ...item,
              ...bet,
            }
      ),
    ];
  },

  deleteBet(state, id) {
    state.bets = [...state.bets.filter((item) => item._id !== id)];
  },
};

/* -------------------------------------- ACTIONS -------------------------------------- */
const actions = {
  fetchBets({ commit }) {
    // axios
    //   .get(URL)
    //   .then((response) => {
    //     commit("setBets", response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     // if (error.response) {
    //     //   commit("setErrors", error.response.data.error);
    //     // } else {
    //     //   commit("setErrors", error);
    //     // }
    //   });
    commit("setBets", bets);
  },

  async fetchBet({ commit }, betData) {
    // const response = await axios.get(
    //   URL + "api/v1/langs/" + betData._id,
    //   betData
    // );
    // commit("setBet", response.data);
    const res = bets.find(
      (b) => b.User.id === betData.User.id && b.Event.id === betData.Event.id
    );
    commit("setBet", res);
    //console.log(betData);
  },

  async betAdd({ commit }, betData) {
    await axios
      .post(URL + "api/v1/langs", betData)
      .then((response) => {
        commit("addBet", response.data);
        //router.push("/dashboard")
      })
      .catch((error) => {
        if (error.response) {
          commit("setErrors", error.response.data.error);
        } else {
          commit("setErrors", error);
        }
      });
  },

  async betUpdate({ commit }, betData) {
    // await axios
    //   .put(URL + "api/v1/langs/" + betData._id, betData)
    //   .then((response) => {
    //     commit("updateBet", response.data);
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       commit("setErrors", error.response.data.error);
    //     } else {
    //       commit("setErrors", error);
    //     }
    //   });
    commit("updateBet", betData);
  },

  async betDelete({ commit }, betData) {
    await axios
      .delete(URL + "api/v1/langs/" + betData._id, betData)
      .then((response) => {
        commit("deleteBet", response.data._id);
      })
      .catch((error) => {
        if (error.response) {
          commit("setErrors", error.response.data.error);
        } else {
          commit("setErrors", error);
        }
      });
  },

  async betClear({ commit }) {
    commit("clearBet");
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};