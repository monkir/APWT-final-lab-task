import MyLayout from "../component/layout"
import Header from "../component/header"
import Link from "next/link"

export default function mngCustomers({data}) {
  return (
    <>
    
    <MyLayout title="Employee Login"/>
    <div>
      <Link href={"#"}>Index</Link>
      <form>
        <label for="id">Email: </label><input type="text" name="email"/><br/>
        <label for="password">Password: </label><input type="password" name="password"/><br/>
        <input type="submit" name="Login"/><br/>
        <input type="reset"/><br/>
      </form>
    </div>
    </>
  )
}

