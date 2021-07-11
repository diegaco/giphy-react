import LazyCategories from "../Categories";

export default function WithSidebar(Component) {
  return function WithSidebarComponent({...props}) {
    return (
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-9 min-h-screen">
          <Component {...props} />
        </div>
        <div className="col-span-12 lg:col-span-3 mt-10 md:mt-3">
          <LazyCategories />
        </div>
      </div>
    )
  }
}
