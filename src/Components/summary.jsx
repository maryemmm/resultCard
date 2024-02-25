import Score from './score';
import './summary.css';
import reactionIcon from '../Assests/reactionIcon.jpg';
import brainIcon from '../Assests/brainIcon.jpg';
import verbalIcon from '../Assests/verbalIcon.jpg';
import eyeIcon from '../Assests/eyeIcon.jpg';
function Summary(){
    return(
        <div className='scores'>
                    <Score
                     bgColor={"#ffedea"}
                     color={"#cc1f00"}
                    icon={reactionIcon}
                    sub_title="Reaction"
                    score="80"/>
                    <Score
                    bgColor={"#fbfacf"}
                    color={"#ece911"}
                    icon={brainIcon}
                    sub_title="Memory"
                    score="92"/>
                    <Score
                    bgColor={"#e8f6db"}
                    color={"#19B1A3"}
                    icon={verbalIcon}
                    sub_title="Verbal"
                    score="61"/>
                    <Score
                    bgColor={"#e0e0ff"}
                    color={"blue"}
                    icon={eyeIcon}
                    sub_title="Visual"
                    score="72"/>
                </div>
    )
}
export default Summary;