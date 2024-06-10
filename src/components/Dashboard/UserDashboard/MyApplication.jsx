import { Link, useNavigate } from "react-router-dom";
import UseAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const MyApplication = () => {
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();

  const { data: appliedScholarship = [] } = useQuery({
    queryKey: ["appliedScholarship"],
    queryFn: async () => {
      const { data } = await axiosPublic("/applied-scholarships");
      return data;
    },
  });

  const editApplication = (status,id) => {
    if(status === 'processing') return toast.error("Cannot edit application is processing");
    navigate(`edit-Application/${id}`);
  }

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold underline">
        My Application
      </h2>
      <div className="overflow-x-auto mt-6">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>University Name</th>
              <th>University Address</th>
              <th>Subject Category</th>
              <th>Applied Degree</th>
              <th>Application Fees</th>
              <th>Service Charge</th>
              <th>Status</th>
              <th colSpan={3}>Action</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {appliedScholarship.map((scholarship) => (
              <tr key={scholarship?._id} className="text-center">
                <td>{scholarship?.universityName}</td>
                <td>{scholarship?.address}</td>
                <td>{scholarship?.subjectCategory}</td>
                <td>{scholarship?.degree}</td>
                <td>${scholarship?.applicationFees}</td>
                <td>${scholarship?.serviceCharge}</td>
                <td>{scholarship?.status}</td>
                <td>
                    <Link to={`/scholarship-details/${scholarship?.scholarship_id}`}>
                    <button className="bg-green-200 rounded-md py-1.5 px-3 text-green-700 font-semibold">Details</button>
                    </Link>
                </td>
                <td>
                    <button onClick={() => editApplication(scholarship?.status, scholarship?._id)} className="bg-blue-200 rounded-md py-1.5 px-3 text-blue-700 font-semibold">Edit</button>
                </td>
                <td>
                    <button className="bg-red-200 rounded-md py-1.5 px-3 text-rose-700 font-semibold">Cancel</button>
                </td>
                <td>
                    <button className="bg-navy/90 rounded-md py-1.5 px-3 text-white font-semibold">Add Review</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
