export default {
  getRealEstateRegions: (state) => {
    return state.locationOptions
      .map(item => ({
        name: item.title,
        val: item.alias,
        rating: item.rating,
        additionally: item.region_title ? [{ name: item.region_title }] : null
      }))
      .sort((a, b) => {
        if (a.rating && b.rating) {
          return a.rating - b.rating
        }
        if (a.rating && !b.rating) {
          return -1
        }
        if (b.rating && !a.rating) {
          return 1
        }
        return ('' + a.name).localeCompare(b.name)
      })
  },
  getForm: state => ({ ...state.form }),
  getFormDynamic: state => ({ ...state.formDynamic }),
  getDefaultOptions: state => state.defaultOptions,
  getDynamicOptions: state => state.dynamicOptions,
  getDynamicList: state => state.dynamicOptionsParams.map(item => item.alias),
  getDynamicMerged: state => ([...state.dynamicMerged]),
  getObjectAreaOffers: state => state.objectAreaOffers,
  getObjectRoofHOffers: state => state.objectRoofHOffers,
  message: state => state.message
}
