import Category from "../Category";
import Spinner from "../Spinner";
import useTrendings from "../../hooks/useTrendings";

export default function Categories() {
  const { trendings, loading } = useTrendings();

  if (loading) return <Spinner />;

  return (
    <>
      <h3 className="text-2xl md:text-3xl text-purple-300 mb-5">
        Trending categories
      </h3>
      <div className="divide-y divide-gray-100 divide-opacity-10 flex flex-col">
        {
          trendings.map(trending =>
            <Category key={trending} trending={trending} />
          )
        }
      </div>
    </>
  );
}
