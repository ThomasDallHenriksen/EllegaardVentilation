import Carousel from "../components/carousel";
import '../assets/styles/galleri.scss';

const Galleri = () => {
    const images = [
        "./././galleri/galleri3.jpg",
        "./././galleri/galleri4.jpg",
        "./././galleri/galleri5.jpg",
        "./././galleri/galleri7.jpg"
    ]

    return (
        <div className="galleri-page">
            <Carousel images={images}/>
        </div>
    )
} 

export default Galleri;
