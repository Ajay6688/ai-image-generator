import { useRef } from "react";
import classes from "./DescriptionInput.module.css";
import callGenerateImageApi from "../../ApiServices/CallApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState, imagesAction } from "../../store/imagesSlice";

const DescriptionInput = () => {
  const isLoading = useSelector(
    (state: RootState) => state.generatedImageStore.isLoading
  );
  const dispatch = useDispatch();
  const valid = useSelector(
    (state: RootState) => state.generatedImageStore.formIsValid
  );
  let inputDescRef = useRef<any>(null);

  let delay = (function () {
    let timer: any = 0;
    return function (callback: any, ms: number) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();
  const onChangeInputDescHandler = (e: any) => {
    delay(function () {
      console.log(e.target.value);
      dispatch(imagesAction.addDescription(e.target.value));
    }, 500);
  };

  const handleGenerateImageClick = async () => {
    if (inputDescRef.current?.value.trim().length === 0) {
      dispatch(imagesAction.setFormIsValid(false));
      return;
    }
    dispatch(imagesAction.setFormIsValid(true));

    dispatch(
      imagesAction.addDescription(
        inputDescRef.current?.value ?? "a cat sitting on a laptop"
      )
    );

    const prompt = inputDescRef.current?.value ?? "a cat sitting on a laptop";
    const data = {
      model: "image-alpha-001",
      prompt: prompt,
      num_images: 10,
      size: "1024x1024",
      response_format: "url",
    };
    console.log(data);

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
    <div className={classes.desc}>
      {!valid && <p className="text-danger">Description must not be empty</p>}
      <label className={!valid ? "form-label text-danger" : "form-label"}>
        Description
      </label>
      <div className="form-floating">
        <textarea
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          className={
            !valid
              ? "form-control " + classes.error
              : `form-control ${classes.input}`
          }
          onChange={onChangeInputDescHandler}
          ref={inputDescRef}
        ></textarea>
      </div>
      <input
        className="btn btn-primary mt-2"
        type="button"
        value={
          isLoading
            ? "Loading your described images"
            : "Generate your descrbed images"
        }
        onClick={handleGenerateImageClick}
        disabled={isLoading}
      />
    </div>
  );
};

export default DescriptionInput;
