import Button from './Button'
import Card from './Card';
import style from './ErrorModal.module.css'

const ErrorModal = (props) => {
    return(
        <div className={style.backdrop} onClick={props.onClick}>
            <Card className={style.modal}>
                <header className={style.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={style.content}>
                    {props.message}
                </div>
                <footer className={style.actions}>
                    <Button onClick={props.onClick}>OK</Button>
                </footer>
            </Card>
        </div>
    );
}

export default ErrorModal;