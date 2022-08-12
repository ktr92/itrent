export default {
  getUserErrors: state => state.errors.user,
  getStep: state => state.step,
  message: state => state.message,
  getCookie: state => state.connectsid,
  getApplications: state => state.applications,
  getStatusMap: state => state.statusMap
}
