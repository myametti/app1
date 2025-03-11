
const PagTS =({titulo}) => {
    return (
        <div className="PagTS"> 
            <BotonVista titulo={titulo}/>
        </div>
    )
}

const BotonVista = ({titulo}) => {
    const handleClick = () => {
        window.location.href = 'https://www.taylorswift.com/';
    }
    return <Button onClick={handleClick}>{titulo}</Button>
}

const Button = ({onClick, children}) => {
    return <button onClick={onClick}>{children}</button>
}
export default PagTS;