import Authpage from "../app/(auth)/authpage"
import { Slot, Redirect } from "expo-router"; // Slot ve Redirect bileşenlerini import ediyoruz

// userLogin işlemleri yapılacak
const UserNavi = () => {
  return <Redirect href="/(auth)/authpage"/>
}

export default UserNavi