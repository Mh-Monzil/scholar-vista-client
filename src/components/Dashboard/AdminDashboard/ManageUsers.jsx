import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../hooks/useAxiosPublic";

import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import UseAuth from "../../../hooks/useAuth";

const ManageUsers = () => {
  const { user } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/users`);
      return data;
    },
  });

  const handleRoleChange = async (role, email) => {
    if (user?.email === "monzil246@gmail.com") {
      console.log(role, email);
      const { data } = await axiosPublic.patch(`/users/${email}`, { role });
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("Role changed");
        refetch();
      }
    } else {
      toast.error("Admin Only");
    }
  };

  const deleteUser = async (email) => {
    console.log(email);
    if (email === "monzil246@gmail.com") {
      toast.error("Cannot Delete Yourself");
    } else {
      const { data } = await axiosPublic.delete(`/users/${email}`);
      console.log(data);
      if (data.deletedCount > 0) {
        toast.success("User Deleted Successfully");
        refetch();
      }
    }
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold underline">
        My Application
      </h2>
      <div className="overflow-x-auto mt-6 shadow-md">
        <table className="table">
          {/* head */}
          <thead className="bg-navy text-white">
            <tr className="text-center font-medium">
              <th>User Name</th>
              <th>User Email</th>
              <th>User Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user?._id} className="text-center font-medium text-lg">
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  <select
                    onChange={(e) => {
                      handleRoleChange(e.target.value, user?.email);
                    }}
                    className="block w-40 mx-auto px-4 py-2 text-gray-700 bg-white border rounded-sm focus:border-orange-200 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-orange-200"
                    defaultValue={user?.role}
                  >
                    <option value="user">user</option>
                    <option value="moderator">moderator</option>
                    <option value="admin">admin</option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => deleteUser(user?.email)}
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
  );
};

export default ManageUsers;
