import MyLayout from "../component/layout"
import Header from "../component/header"
import Link from "next/link"

export default function mngCustomers({data}) {
  return (
    <>
    
    <MyLayout title="Manage Customers"/>
    <div>
      <Link href={"manage-customer/add-customer"}>Add Customer</Link>
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>address</th>
            <th colSpan={3}>Action</th>
            {/* <th>status</th> */}
          </tr>
          {data.map(item=>(
            <>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              {/* <td>{item.profile}</td> */}
              <td><Link href={"#"}>Edit</Link></td>
              <td><Link href={"#"}>Block</Link></td>
              <td><Link href={"#"}>Delete</Link></td>
            </tr>
            </>
          ))}
        </tbody>
        
      </table>
    </div>
    </>
  )
}

export async function getServerSideProps() {
   
  const response = await fetch('http://localhost:3000/employee/showcustomers');
  const data = await response.json();

return { props: { data } }
}
