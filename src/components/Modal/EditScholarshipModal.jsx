import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Fragment } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Form/CheckoutForm";
import { useForm } from "react-hook-form";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const EditScholarshipModal = ({ closeModal, isOpen, scholarship }) => {
    const { register, handleSubmit, reset } = useForm();
    console.log(scholarship);

    const onSubmit = async (data) => {
        console.log(data);
    }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-xl pb-3 font-medium text-center leading-6 text-gray-900"
                >
                  Please Pay Application Fees First
                </DialogTitle>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-5"
                >
                  {/* university name  */}
                  <div className="mt-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 "
                      htmlFor="universityName"
                    >
                      University Name
                    </label>
                    <input
                      id="universityName"
                      autoComplete="universityName"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-sm    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                      defaultValue={scholarship?.universityName}
                      {...register("universityName", { required: true })}
                    />
                  </div>

                  {/*   Scholarship Category */}
                  <div className="mt-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 "
                      htmlFor=" scholarshipCategory"
                    >
                      Scholarship Category
                    </label>
                    <input
                      id="scholarshipCategory"
                      autoComplete="scholarshipCategory"
                      className="block w-full px-4 py-1.5 text-gray-700 bg-white border rounded-sm    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                      {...register("scholarshipCategory", { required: true })}
                    />
                  </div>

                  {/* University Location  */}
                  <div className="mt-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 "
                      htmlFor="universityLocation"
                    >
                      University Location
                    </label>
                    <input
                      id="universityLocation"
                      autoComplete="universityLocation"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-sm    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                      {...register("universityLocation", { required: true })}
                    />
                  </div>

                  {/* Application Deadline  */}
                  <div className="mt-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 "
                      htmlFor="applicationDeadline"
                    >
                      Application Deadline
                    </label>
                    <input
                      id="applicationDeadline"
                      autoComplete="applicationDeadline"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-sm    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                      type="date"
                      {...register("applicationDeadline", { required: true })}
                    />
                  </div>

                  {/* applying degree */}
                  <div className="mt-4">
                    <div className="flex justify-between">
                      <label
                        className="block mb-2 text-sm font-medium text-gray-600 "
                        htmlFor="degree"
                      >
                        Applying Degree
                      </label>
                    </div>

                    <select
                      id="degree"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-sm focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                      {...register("degree", { required: true })}
                    >
                      <option>Select Degree</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Bachelor">Bachelor</option>
                      <option value="Masters">Masters</option>
                    </select>
                  </div>

                  {/* Subject Category  */}
                  <div className="mt-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 "
                      htmlFor="subjectCategory"
                    >
                      Subject Category
                    </label>
                    <input
                      id="subjectCategory"
                      autoComplete="subjectCategory"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-sm    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                      {...register("subjectCategory", { required: true })}
                    />
                  </div>

                  {/* subject name */}
                  <div className="mt-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 "
                      htmlFor="subjectName"
                    >
                      Subject Name
                    </label>
                    <input
                      id="subjectName"
                      autoComplete="subjectName"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-sm    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                      {...register("subjectName", { required: true })}
                    />
                  </div>

                  {/* application fees  */}
                  <div className="mt-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 "
                      htmlFor="applicationFees"
                    >
                      Application Fees
                    </label>
                    <input
                      id="applicationFees"
                      autoComplete="applicationFees"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-sm    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                      {...register("applicationFees", { required: true })}
                    />
                  </div>

                  {/* scholarship description  */}
                  <div className="mt-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 "
                      htmlFor="scholarshipDescription"
                    >
                      Scholarship Description
                    </label>
                    <input
                      id="scholarshipDescription"
                      autoComplete="scholarshipDescription"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-sm    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                      {...register("scholarshipDescription", {
                        required: true,
                      })}
                    />
                  </div>

                  {/* stipend  */}
                  <div className="mt-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 "
                      htmlFor="stipend"
                    >
                      Stipend
                    </label>
                    <input
                      id="stipend"
                      autoComplete="stipend"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-sm    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                      {...register("stipend", {
                        required: true,
                      })}
                    />
                  </div>

                  {/* service charge  */}
                  <div className="mt-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 "
                      htmlFor="serviceCharge"
                    >
                      Service Charge
                    </label>
                    <input
                      id="serviceCharge"
                      autoComplete="serviceCharge"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-sm    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                      type="number"
                      {...register("serviceCharge", {
                        required: true,
                      })}
                    />
                  </div>

                  {/* scholarship name  */}
                  <div className="mt-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 "
                      htmlFor="scholarshipName"
                    >
                      Service Charge
                    </label>
                    <input
                      id="scholarshipName"
                      autoComplete="scholarshipName"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-sm    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                      {...register("scholarshipName", {
                        required: true,
                      })}
                    />
                  </div>

                  <div className="mt-6 md:col-span-2">
                    <button
                      type="submit"
                      className="w-full px-6 py-3 text-lg font-semibold tracking-wide  capitalize transition-colors duration-300 transform bg-yellow rounded-sm hover:bg-navy hover:text-white focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditScholarshipModal;
