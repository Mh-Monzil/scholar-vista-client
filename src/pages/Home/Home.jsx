import Banner from "../../components/Banner/Banner";
import Contact from "./Contact";
import StudentsReview from "./StudentsReview";
import TopScholarship from "./TopScholarship";


const Home = () => {
    return (
        <div>
            <Banner />
            <TopScholarship />
            <StudentsReview />
            <Contact />
        </div>
    );
};

export default Home;