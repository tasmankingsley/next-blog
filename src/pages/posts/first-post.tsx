import Link from "next/link";
import styles from '@/styles/Posts.module.css'

export default function FirstPost() {
    return (
        <>
            <main className={styles.main}>
                <Link href="/">Go home</Link>
            </main>
        </>
    )
}