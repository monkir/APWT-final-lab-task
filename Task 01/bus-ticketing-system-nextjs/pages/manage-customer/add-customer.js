import MyLayout from "../component/layout"
import Header from "../component/header"
import Link from "next/link"

export default function mngCustomers({data}) {
  return (
    <>
    
    <MyLayout title="Manage Customers"/>
    <div>
      <Link href={"#"}>Index</Link>
      <form>
        <label for="id">Name: </label><input type="text" id="id"/><br/>
        <label for="id">Email: </label><input type="text" id="id"/><br/>
        <label for="id">Phone: </label><input type="text" id="id"/><br/>
        <label for="id">Address: </label><input type="text" id="id"/><br/>
        <input type="submit"/><br/>
        <input type="reset"/><br/>
      </form>
    </div>
    </>
  )
}

export async function getServerSideProps() {
   
  const response = await fetch('http://localhost:3000/employee/showcustomers');
  const data = await response.json();

return { props: { data } }
}
