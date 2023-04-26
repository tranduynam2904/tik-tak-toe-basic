function Box(props){
    return (
        <div onClick={props.handle_click}>
            <h1>
                I'm {props.name} and My age is {props.old}
            </h1>
        </div>
    )
}
export default Box;