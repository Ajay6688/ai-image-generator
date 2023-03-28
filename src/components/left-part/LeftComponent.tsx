import AristicContainer from "../artistic-container/ArtisticContainer";
import DescriptionInput from "../description/DescriptionInput";
import TimeOfTheDay from "../time-of-day/TimeOfTheDay";
import classes from './LeftComponent.module.css';

const LeftComponent = ()=>{
    return (
        <div className={classes.leftContainer}>
            <DescriptionInput/>
            <AristicContainer/>
            <TimeOfTheDay/>
        </div>
    )
}

export default LeftComponent;