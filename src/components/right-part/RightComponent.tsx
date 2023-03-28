import MainFhototFrame from "../frame/MainPhotoFrame";
import classes from './RightComponent.module.css';

const RightComponent = ()=>{
    return ( 
        <div className={classes.rightContainer}>
            <MainFhototFrame/>
        </div>
    )
}

export default RightComponent;