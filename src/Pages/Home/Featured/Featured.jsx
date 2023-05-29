import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import FeaturedImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading="check it out" heading="Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60  pb-20 pt-12 px-36">
                <div>
                    <img src={FeaturedImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20,2029</p>
                    <p className="uppercase">Where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nobis ducimus officiis exercitationem nesciunt quidem omnis labore nisi maxime esse quod ullam praesentium expedita error perferendis id, numquam quae sit temporibus laudantium inventore magni eum ea! Ex sed porro nihil nostrum voluptatem reprehenderit, dolor incidunt quisquam eveniet ipsam fugiat vitae.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;