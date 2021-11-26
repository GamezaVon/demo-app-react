import NotFound from '../../assets/img/404.gif'
import styles from './NotFound.module.sass'

export default function FourOFour(){
    return(
    <div className={styles.notfound}>
        <p>Sorry, not found!</p>
        <img src={NotFound} alt="loading..." />
    </div>)
}