import Link from "next/link";
import styles from '@/styles/Posts.module.css'

export default function FirstPost() {
    return (
        <>
            <main className={styles.main}>
                <h1>First Post</h1>
                <Link href="/">back home</Link>
            </main>
        </>
    )
}