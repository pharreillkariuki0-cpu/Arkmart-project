function Users(){
    //i've created an array of strings
 let Customers = ['Kariuki','Njeri','Kipkoech','Musili','Musyoka','Owino']

return(
    <>
    <h3>Customers List</h3>
    <ul>
        {Customers.map((customer) => (<li>{customer}</li>))}
    </ul>
    </>
)
}

export default Users