import Categories from "../Categories";

export default function WithSidebar(Component) {
  return function WithSidebarComponent({...props}) {
    return (
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-9">
          <Component {...props} />
        </div>
        <div className="col-span-12 md:col-span-3 mt-10 md:mt-3">
          <Categories />
        </div>
      </div>
    )
  }
}
