import classes from "./ArtisticContainer.module.css";
import { useSelector, useDispatch } from "react-redux";
import { imagesAction } from "../../store/imagesSlice";
import { RootState } from "../../store/imagesSlice";
import callGenerateImageApi from "../../ApiServices/CallApi";
import acrylicImg from "../../assets/acrylic.jpg";
import pencilImg from "../../assets/pencil.jpg";
import oilPantingImg from "../../assets/oilPainting.jpg";
import waterColorImg from "../../assets/waterColor.jpg";

const AristicContainer = () => {
  const dispatch = useDispatch();
  const description = useSelector(
    (state: RootState) => state.generatedImageStore.description
  );

  const addAdditionalDescription = async (addDesc: string) => {
    if(description.trim().length === 0){
      dispatch(imagesAction.setFormIsValid(false))
      return
    }
    dispatch(imagesAction.setFormIsValid(true));
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
      
      dispatch(imagesAction.setIsLoading(true))
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
      <h4>Artistic Styles</h4>
      <div className="row">
        <div
          className={"col-6 col-sm-3 " + classes.containerColumn}
          onClick={addAdditionalDescription.bind(
            null,
            "images must be in acrylic artistic styles"
          )}
        >
          <img src={acrylicImg} alt="acrylic related"/>
          Acrylic
        </div>
        <div
          className={"col-6 col-sm-3 " + classes.containerColumn}
          onClick={addAdditionalDescription.bind(
            null,
            "images must be in pencil artistic styles"
          )}
        >
          <img src={pencilImg} alt="pencil drawing related"/>
          Pencil
        </div>
        {/* Force next columns to break to new line */}
        <div className="w-100" />
        <div
          className={"col-6 col-sm-3 " + classes.containerColumn}
          onClick={addAdditionalDescription.bind(
            null,
            "images must be in oil painting artistic styles"
          )}
        >
          <img src={oilPantingImg} alt="oil painting related"/>
          Oil Painting
        </div>
        <div
          className={"col-6 col-sm-3 " + classes.containerColumn}
          onClick={addAdditionalDescription.bind(
            null,
            "images must be in water color painting artistic styles"
          )}
        >
          <img src={waterColorImg} alt="water color related"/>
          Water Color
        </div>
      </div>
    </div>
  );
};

export default AristicContainer;
