function Bar({precentage,color}){
    return(
        <div className="bar" style={{backgroundColor:color,width:precentage+"%"}}>
            <p>{precentage}%</p>
        </div>
    );
}

export default Bar;