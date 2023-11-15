import style from './PopUpCodigo.module.css';
import Botao from '../button/Botao';
import Input from '../form/Input';
import {Link} from 'react-router-dom';

function PopUpCodigo({tipo, placeholder, nome}) {
if (tipo === "Excluir projeto") {
    return (
        <div className={style.janela}>

            <nav className={style.nav}>
                <p>{tipo}</p>
            </nav>

            <div className={style.corpo}>
            <Input type={tipo} placeholder={placeholder}/>
            <Link to ="/excluir-projeto" style={{textDecoration: 'none', color: '#FFF'}}><Botao nome={nome}/></Link>
            </div>
        </div>
    )
}

    return (
        <div className={style.janela}>

            <nav className={style.nav}>
                <p>{tipo}</p>
            </nav>

            <div className={style.corpo}>
            <Input type={tipo} placeholder={placeholder}/>
            <Botao nome={nome}/>
            </div>
        </div>
    )

}

export default PopUpCodigo;