export default {
  getUserErrors: state => state.errors.user,
  getStep: state => state.step,
  getCookie: state => state.connectsid,
  getApplications: state => state.applications,
  getApplication: state => (id) => {
    return state.applications.data.filter(item => item.id === id)[0]
  },
  getStatusMap: state => state.statusMap,
  getCurrentApplication: state => state.currentApplication
}
