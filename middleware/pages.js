export default function(context) {
  const routes = ['index', 'place', 'trips']
  if(routes.includes(context.route.name)) {
    // go tell the store to update the page
    context.store.commit('updatePage', context.route.name)
  }
}
