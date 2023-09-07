import styles from "./page.module.css"
import { CardList } from "@/components/cardList/CardList"
import { CartList } from "@/components/cartList/CartList"
import Featured from "@/components/featured/Featured"
import { Menu } from "@/components/menu/Menu"

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured/>
      <CartList/>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  )
}
