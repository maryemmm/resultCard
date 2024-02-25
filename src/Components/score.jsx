import './score.css';
function Score({icon,sub_title,score,bgColor,color}){
    return(
        <div className='sub_score' style={{backgroundColor:bgColor}}>
            <div className='capacity'>
            <img src={icon} alt="logo" />
            <p className='sub_title' style={{color:color}}>{sub_title}</p>
            </div>
            <p className='score_result'><span>{score}</span>/ 100</p>
        </div>
    )
}
export default Score;