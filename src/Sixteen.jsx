 

export const Sixteen = () => {

    const HandleWelcomeUser = (user) => {
        alert(`hey,${user}`)
    }

    const handleHover = () => {
        alert(`hey thanks for hovering me`)
    }

    return (
        <>
            <WelcomeUser 
            onClick={()=> HandleWelcomeUser("chowan")} 
            onMouseEnter={handleHover} />
        </>
    )

}

const WelcomeUser = (props) => {

    const handleGreeting=()=>{
        console.log(`hey user welcome`)
        props.onClick();
    }
    return(

    <>
        <button onClick={props.onClick}>Click</button>
        <button onMouseEnter={props.onMouseEnter}>Hover me</button>
        <button onClick={handleGreeting}>Greeting</button>
    </>
    )
}