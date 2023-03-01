import Link from "next/link";
import styles from '@/styles/Posts.module.css'

export default function SecondPost() {
    return (
        <>
            <main className={styles.main}>
                <h1>Second Post</h1>
                <Link href="/">back home</Link>
            </main>
        </>
    )
}