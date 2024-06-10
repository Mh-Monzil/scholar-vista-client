import { useQuery } from "@tanstack/react-query";
import ReviewModal from "../../Modal/ReviewModal";
import UseAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import EditReviewModal from "../../Modal/EditReviewModal";
import toast from "react-hot-toast";

const MyReviews = () => {
  const axiosPublic = UseAxiosPublic();
  const [isOpen, setIsOpen] = useState(false);
  const [mountModal, setMountModal] = useState(false);
  const [editReview, setEditReview] = useState({});

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const { data } = await axiosPublic("/reviews");
      console.log(data);
      return data;
    },
  });
  console.log(reviews);

  const openModal = (review) => {
    setEditReview(review)
    setIsOpen(true);
    refetch();
    setMountModal(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  console.log(editReview);

  const deleteReview = async (id) => {
    console.log(id);
    const { data } = await axiosPublic.delete(`/delete-reviews/${id}`)
    console.log(data);
    if(data.deletedCount > 0) {
      toast.success("Review deleted successfully")
      refetch();
    }
  }

  return (
    <div>
      {
        mountModal && <EditReviewModal
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
        editReview={editReview}
      />
      }
      <h2 className="text-2xl md:text-3xl font-bold underline">
        My Reviews
      </h2>
      <div className="overflow-x-auto mt-6 shadow-md">
        <table className="table">
          {/* head */}
          <thead className="bg-navy text-white">
            <tr className="text-center">
              <th>Scholarship Name</th>
              <th>University Name</th>
              <th>Review Comments</th>
              <th>Review Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review?._id} className="text-center font-medium text-lg">
                <td className="max-w-60">{review?.scholarshipName}</td>
                <td>{review?.universityName}</td>
                <td className="max-w-sm">{review?.reviewerComment}</td>
                <td>{review?.reviewDate}</td>
                <td >
                  <FaRegEdit onClick={() => openModal(review)} className="text-3xl text-navy mx-auto cursor-pointer" />
                </td>
                <td onClick={() => deleteReview(review?._id)}>
                  <MdDelete className="text-4xl text-rose-500 mx-auto cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;


