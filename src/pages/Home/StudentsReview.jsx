import UseAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./scholarshipDetails.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import ApplicantsReview from "../../components/ApplicantsReview/ApplicantsReview";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const StudentsReview = () => {
    const axiosPublic = UseAxiosPublic();

    const {data: studentsReviews = [], isLoading} = useQuery({
        queryKey: ['studentsReview'],
        queryFn: async () => {
            const {data} = await axiosPublic.get("reviews");
            console.log(data);
            return data;
        }
    })
    console.log(studentsReviews);

    return (
        <div className="max-w-7xl mx-auto mt-12 lg:mt-24">
           <SectionTitle title={"Students Review"} />
            <div>
                {
                    <div className="my-14">
                    <Swiper
                      effect={"coverflow"}
                      grabCursor={true}
                      centeredSlides={false}
                      slidesPerView={"auto"}
                      coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                      }}
                      pagination={true}
                      loop={true}
                      modules={[EffectCoverflow, Pagination]}
                      breakpoints={{
                        // when window width is >= 1024px (large devices)
                        1024: {
                          slidesPerView: 3,
                        },
                      }}
                      className="mySwiper w-full"
                    >
                      {studentsReviews.map((review) => (
                        <SwiperSlide key={review._id}>
                          <ApplicantsReview review={review} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                }
            </div>
        </div>
    );
};

export default StudentsReview;