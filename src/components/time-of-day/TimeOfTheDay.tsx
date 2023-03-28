import classes from "./TimeOfTheDay.module.css";
import { useSelector, useDispatch } from "react-redux";
import { imagesAction } from "../../store/imagesSlice";
import { RootState } from "../../store/imagesSlice";
import callGenerateImageApi from "../../ApiServices/CallApi";
import morningImg from "../../assets/morning.jpg";
import sunriseImg from "../../assets/sunrise.jpg";
import sunsetImg from "../../assets/sunset.jpg";
import nightImg from "../../assets/night1.jpg";

const TimeOfTheDay = () => {
  const dispatch = useDispatch();
  const description = useSelector(
    (state: RootState) => state.generatedImageStore.description
  );

  const addAdditionalDescription = async (addDesc: string) => {
    if (description.trim().length === 0) {
      dispatch(imagesAction.setFormIsValid(false));
      return;
    }
    const newDescription = description + addDesc;
    console.log(newDescription);
    const data = {
      model: "image-alpha-001",
      prompt: newDescription,
      num_images: 10,
      size: "1024x1024",
      response_format: "url",
    };
    try {
      dispatch(imagesAction.setIsLoading(true));
      const response: any = await callGenerateImageApi(data);

      console.log(response);
      await dispatch(imagesAction.addGeneratedImages(response.data.data));
      dispatch(imagesAction.setIsLoading(false));
    } catch (error) {
      dispatch(imagesAction.setIsLoading(false));
      console.log(error);
      alert("something went wrong with you");
    }
  };

  return (
    <div className={classes.aristicContainer}>
      <h4>Time Of the day</h4>
      <div className="row">
        <div
          className={"col-6 col-sm-3 " + classes.containerColumn}
          onClick={addAdditionalDescription.bind(
            null,
            "images must be in morning time of the day"
          )}
        >
          <img src={morningImg} alt="morning related"/>
          Morning
        </div>
        <div
          className={"col-6 col-sm-3 " + classes.containerColumn}
          onClick={addAdditionalDescription.bind(
            null,
            "images must be in sunrise time of the day"
          )}
        >
          <img src={sunriseImg} alt="sunrise related"/>
          Sunrise
        </div>
        {/* Force next columns to break to new line */}
        <div className="w-100" />
        <div
          className={"col-6 col-sm-3 " + classes.containerColumn}
          onClick={addAdditionalDescription.bind(
            null,
            "images must be in sunset time of the day"
          )}
        >
          <img src={sunsetImg} alt="sunset related"/>
          Sunset
        </div>
        <div
          className={"col-6 col-sm-3 " + classes.containerColumn}
          onClick={addAdditionalDescription.bind(
            null,
            "images must be in night time of the day"
          )}
        >
          <img src={nightImg} alt="night related"/>
          Night
        </div>
      </div>
    </div>
  );
};

export default TimeOfTheDay;
