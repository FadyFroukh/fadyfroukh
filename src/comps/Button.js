function Button(props){
    return(
        <div className="btn">
            <button>{props.children}</button>
        </div>
    );
}

export default Button;