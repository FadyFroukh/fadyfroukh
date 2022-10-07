const Emoji = props => (
    <b
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
      style={{fontSize:props.fontSize,cursor:props.cursor}}
      onClick={props.onClick}
    >
      {props.symbol}
    </b>
)
export default Emoji;