import Emoji from "./Emoji";
function EmojiCut({label,symbol}){

    return(
        <div className="emoji-cut">
            <div className="emojis-div">
                <Emoji label ={label} symbol={symbol}/>       
                <Emoji label ={label} symbol={symbol}/>       
                <Emoji label ={label} symbol={symbol}/>       
            </div>
        </div>
    );
}

export default EmojiCut;