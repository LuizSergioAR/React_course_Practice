import style from './../UserForm/UserForm.module.css'

const ErrorModal = props =>{
    return(<div>
        <div className={style.backdrop}></div>
        <div>
        <header>
            <h2>{props.title}</h2>
        </header>
        <div>
            <p>{props.message}</p>
        </div>
        <footer>
        <button>Okay</button>
        </footer>
    </div>
    </div>)
}

export default ErrorModal