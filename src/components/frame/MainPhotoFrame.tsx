import classes from "./MainPhotoFrame.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/imagesSlice";



const MainFhototFrame = () => {

  const images = useSelector(
    (state: RootState) => state.generatedImageStore.generatedImages
  );
  console.log("generated image", images);

  return (
    <div
      id="carouselExampleIndicators"
      className={"carousel slide " + classes.mainFrame}
    >
      <div className={"carousel-indicators "}>
        {images.map((image, i) => {
          if (i === 0) {
            return (
              <button
                key={i}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={i}
                className={"active "}
                aria-current="true"
                aria-label={"Slide "+i}
              />
            );
          }
          return (
            <button
            key={i}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={i}
              aria-label={"Slide "+i}
            />
          );
        })}
      </div>
      <div className="carousel-inner">
        {images.map((image, i) => {
          let imgClass = "carousel-item";
          if (i === 0) {
            imgClass = imgClass + " active";
          }
          return (
            <div className={imgClass} key={i}>
              <img src={image.url} className="d-block w-100" alt="..." />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next "
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MainFhototFrame;
