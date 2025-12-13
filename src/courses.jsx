function Courses() {
    let Course = ['BIT 110','MAT 115','MAT 116','BIT 111','STA111','PHY 115']

    return(
        <>
        <h3>Courses</h3>
        <ul>
            {Course.map((unit) => (<li>{unit}</li>))}
        </ul>
        </>
    )
}

export default Courses