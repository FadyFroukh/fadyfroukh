function H3(props){
    return(
        <h3 className="H3" style={{fontSize:props.fontSize,textAlign:"center"}}>{props.children}</h3>
    );
}

export default H3;