import FilterBtns from "./Components/FilterBtns";
import { useEffect, useState } from "react";
import { filterData, apiUrl } from "./data";
import Courses from "./Components/Courses";
import Loader from "./Components/Loader";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const [isError, setIsError] = useState(false);

  async function fetchApi() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output);
    } catch (err) {
      console.log(err);

      setIsError(true);
      toast.error("Can't connect Please check your internet!");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="min-h-screen gap-4 flex flex-col items-center">
      <nav>
        <h2 className="py-2 text-3xl font-bold bg-slate-900 text-white w-screen text-center">
          Code Academy
        </h2>
      </nav>

      <div className="">
        <ul className="flex">
          <FilterBtns
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </ul>
      </div>

      {!isError ? (
        !courses ? (
          <h2 className="text-4xl font-semibold mt-32 text-white">
            Data not found
          </h2>
        ) : (
          <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
            {loading ? (
              <Loader />
            ) : (
              <Courses courses={courses} category={category} />
            )}
          </div>
        )
      ) : (
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-semibold text-red-600">Error : 404</h2>
          <p className="text-3xl text-black">(Internal Server Error)</p>
        </div>
      )}
    </div>
  );
}
export default App;
