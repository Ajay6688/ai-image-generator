import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/header/Header";
import LeftComponent from "./components/left-part/LeftComponent";
import RightComponent from "./components/right-part/RightComponent";
import { RootState } from "./store/imagesSlice";
import Spinner from "./Loader/Spinner";


function App() {
  

  const isLoading = useSelector((state: RootState)=> state.generatedImageStore.isLoading);

  // if(isLoading){
  //   return (<Spinner/>)
  // }
  return (
    <>
    <Header />
    {isLoading && <Spinner/> }
      <div className="mainContainer">
        <LeftComponent />
        <RightComponent />
      </div>
    </>
  );
}

export default App;
