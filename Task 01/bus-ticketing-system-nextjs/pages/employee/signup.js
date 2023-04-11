import MyLayout from "../component/layout"
import Header from "../component/header"
import Link from "next/link"

export default function mngCustomers({data}) {
  return (
    <>
    
    <MyLayout title="Employee Signup"/>
    <div>
      <Link href={"#"}>Index</Link>
      <form>
        <label for="id">Name: </label><input type="text" id="id"/><br/>
        <label for="id">Email: </label><input type="text" id="id"/><br/>
        <label for="id">Phone: </label><input type="text" id="id"/><br/>
        <label for="id">Address: </label><input type="text" id="id"/><br/>
        <input type="submit" name="Login"/><br/>
        <input type="reset"/><br/>
      </form>
    </div>
    </>
  )
}

