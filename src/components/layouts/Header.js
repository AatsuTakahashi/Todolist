import Link from "next/link";
import styles from "../../styles/components/layouts/Header.module.css"
import Image from "next/image"; 

export const Header = () => {
    return (
      <header className={styles.headerItem}>
        
        <div className={styles.listItem}>
            <div className={styles.headerContent}>  
                <Image 
                src={"/logoImage.png"}
                width={30}
                height={30}
                alt={"logoIcon"}
                className={styles.headerIcon}
                />
                <p className={styles.headerContentItem}>Todo リスト</p>
            </div>   
            <Link className={styles.headerLogin} href={''}>
                ログイン
            </Link>
        </div>
      </header>
    )
}