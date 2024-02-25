import './result.css';
import Summary from './summary';
function Result({score,mention,description}){
    return(
        <div className='result_card'>
            <div className='leftPart'>
                <p className='title'>Your Result</p>
                <p className='score'><span>{score}</span> of 100</p>
                <p className='mention'>{mention}</p>
                <p className='description'>{description}</p>
            </div>
            <div className='rightPart'>
                <p className='title'>Summary</p>
                <Summary/>
                <button>Continue</button>
            </div>
        </div>
    )
}
export default Result;