function LoadingMenu({percentage}){
    return(
        <div className={`loading ${percentage >= 100 ? "hide-loading" : ""}`}>
            <div className={`loading-box ${percentage >= 100 ? "hide-loading-box" : ""}`}>
                <p>
                    <strong>
                        {
                            percentage > 75 ? "Almost There..." : "Generating Awesome..."
                        }
                    </strong>
                </p>
                <p>
                    {percentage}%
                </p>
            </div>
        </div>
    );
};

export default LoadingMenu;