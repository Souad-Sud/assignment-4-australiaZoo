const SideBarItem = ({animal, onClick}) => {
    return(
        <>
            <li>
                <button onClick={onClick}>

                {animal.name}
                </button>

            </li>
   
        </>

    )
}

export default SideBarItem