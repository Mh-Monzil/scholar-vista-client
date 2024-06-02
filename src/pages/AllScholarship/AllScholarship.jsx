import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../hooks/useAxiosPublic";
import Card from "../../components/Card/Card";
import ScaleLoader from "react-spinners/ScaleLoader";

const AllScholarship = () => {
  const axiosPublic = UseAxiosPublic();

  const { data: scholarships = [], isLoading } = useQuery({
    queryKey: ["scholarships"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/scholarships");
      console.log(data);
      return data;
    },
  });

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center">
        <ScaleLoader
          className=" "
          height={30}
          width={3}
          color="#F2A227"
        />
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-10">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold pt-10 pb-3">
          All ScholarShips
        </h2>
        <p className="text-lg font-medium px-4">
          Discover all available scholarships from top universities worldwide.
          Explore diverse categories, detailed information, and application
          requirements in one place.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
        {scholarships.map((scholar) => (
          <Card key={scholar._id} scholar={scholar} />
        ))}
      </div>
    </div>
  );
};

export default AllScholarship;
