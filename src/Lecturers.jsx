function Lecturers(){
    let Lecturer = ['Madam Vancy','Mr.Kimani','Mr.Kennedy','Dr.Thomas','Dr.Charity','Dr Kihiko']

return(
    <>
    <h3>Lecturers Name</h3>
    <ul>
        {Lecturer.map((names) => (<li>{names}</li>))}
    </ul>
    </>
)
}

export default Lecturers