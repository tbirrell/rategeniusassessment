import axios from 'axios';

export default {
  loadLoanApplications: async ({ commit }) => {
    const applications = await axios.get('https://6271819ac455a64564b41998.mockapi.io/api/v3/applications');
    commit('setApplications', applications.data.data.applications);
  }
};
