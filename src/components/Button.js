
export function Button(props) {
    const { buttonValue, onClick } = props
    return <button onClick={onClick} >{buttonValue}</button>
}