import { useState } from "react";
import UseAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import EditScholarshipModal from "../../Modal/EditScholarshipModal";

const ManageScholarship = () => {
  const axiosPublic = UseAxiosPublic();
  const [isOpen, setIsOpen] = useState(false);
  const [scholarship, setScholarship] = useState({});

  const { data: scholarships = [], isLoading } = useQuery({
    queryKey: ["scholarships"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/scholarships");
      console.log(data);
      return data;
    },
  });

  const openModal = (scholarship) => {
    setIsOpen(true);
    setScholarship(scholarship);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const deleteApplication = (id) => {
    console.log(id, "delete");
  };

  return (
    <>
    <EditScholarshipModal
    isOpen={isOpen}
    openModal={openModal}
    closeModal={closeModal}
    scholarship={scholarship}
     />
      <div>
        <h2 className="text-2xl md:text-3xl font-bold underline">
          Manage Scholarships
        </h2>
        <div className="overflow-x-auto mt-6 shadow-md">
          <table className="table">
            {/* head */}
            <thead className="bg-navy text-white">
              <tr className="text-center font-medium">
                <th>Scholarship Name</th>
                <th>University Name</th>
                <th>Subject Category</th>
                <th>Applied Degree</th>
                <th>Application Fees</th>
                <th>Details</th>
                <th>Edit</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {scholarships.map((scholarship) => (
                <tr
                  key={scholarship?._id}
                  className="text-center font-medium text-lg"
                >
                  <td>{scholarship?.scholarshipName}</td>
                  <td>{scholarship?.universityName}</td>
                  <td>{scholarship?.subjectCategory}</td>
                  <td>{scholarship?.degree}</td>
                  <td>${scholarship?.applicationFees}</td>
                  <td>
                    <Link to={`/scholarship-details/${scholarship?._id}`}>
                      <button className=" tooltip" data-tip="Details">
                        <TbListDetails className="text-3xl text-navy mx-auto cursor-pointer" />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => openModal(scholarship)}
                      className=" tooltip"
                      data-tip="Edit"
                    >
                      <FaRegEdit className="text-3xl text-navy mx-auto cursor-pointer" />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteApplication(scholarship?._id)}
                      className="tooltip"
                      data-tip="Delete"
                    >
                      <MdDelete className="text-4xl text-rose-500 mx-auto cursor-pointer" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageScholarship;
