function Salaries(){
    let Salary = ['Ksh.150,000','Ksh.150,000','Ksh.150,000','Ksh.250,000','Ksh.250,000','Ksh.250,000'];

    return(
        <>
        <h3>Salaries</h3>
        <ul>
            {Salary.map((amount) => (<li>{amount}</li>))}
        </ul>
        </>
    )
}

export default Salaries