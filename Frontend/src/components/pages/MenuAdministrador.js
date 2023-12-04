import style from './MenuAdministrador.module.css';
import { Link } from 'react-router-dom';
function MenuAdministrador() {
  return (
    <div className= {style.janela}>

        <nav className={style.navbar}>
            <p>Menu</p>
            <button><Link to ="/" style={{textDecoration: 'none', color: '#5D6BB7'}}>Logout</Link></button>
        </nav>

        <section className={style.primeiraJanela}>

            <div className={style.primeiraJanela1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="144" height="145" viewBox="0 0 144 145" fill="none">
                <path d="M96.0687 126.185L94.2728 117.206C93.0755 116.707 91.9521 116.182 90.9025 115.632C89.8529 115.081 88.7814 114.408 87.6879 113.614L79.0078 116.308L73.0215 106.131L79.9057 100.145C79.7062 98.7483 79.6064 97.4513 79.6064 96.2541C79.6064 95.0568 79.7062 93.7598 79.9057 92.363L73.0215 86.3767L79.0078 76.2L87.6879 78.8939C88.7854 78.0957 89.8589 77.4232 90.9085 76.8765C91.9581 76.3297 93.0795 75.8049 94.2728 75.3021L96.0687 66.3227H108.041L109.837 75.3021C111.034 75.8009 112.158 76.3497 113.207 76.9483C114.257 77.5469 115.329 78.2952 116.422 79.1932L125.102 76.2L131.088 86.676L124.204 92.6623C124.404 93.8596 124.504 95.1067 124.504 96.4037C124.504 97.7007 124.404 98.9479 124.204 100.145L131.088 106.131L125.102 116.308L116.422 113.614C115.325 114.412 114.253 115.087 113.207 115.638C112.162 116.188 111.038 116.711 109.837 117.206L108.041 126.185H96.0687ZM12.2607 120.199V103.438C12.2607 100.145 13.1088 97.0522 14.8049 94.1589C16.501 91.2655 18.8457 89.0705 21.8388 87.574C26.9271 84.9799 32.664 82.7849 39.0493 80.989C45.4347 79.1932 52.4686 78.2952 60.151 78.2952H62.2462C62.8448 78.2952 63.4434 78.395 64.0421 78.5945C61.1487 85.7781 59.9514 92.9117 60.4503 99.9955C60.9492 107.079 63.3437 113.814 67.6338 120.199H12.2607ZM102.055 108.227C105.347 108.227 108.167 107.053 110.514 104.707C112.86 102.36 114.032 99.5425 114.028 96.2541C114.028 92.9616 112.854 90.1421 110.508 87.7954C108.161 85.4488 105.343 84.2775 102.055 84.2815C98.7625 84.2815 95.943 85.4548 93.5963 87.8014C91.2497 90.1481 90.0784 92.9656 90.0824 96.2541C90.0824 99.5465 91.2557 102.366 93.6023 104.713C95.949 107.059 98.7665 108.231 102.055 108.227ZM60.151 72.3089C53.5661 72.3089 47.929 69.9643 43.2397 65.2751C38.5505 60.5858 36.2059 54.9487 36.2059 48.3638C36.2059 41.7789 38.5505 36.1418 43.2397 31.4526C47.929 26.7633 53.5661 24.4187 60.151 24.4187C66.7359 24.4187 72.373 26.7633 77.0622 31.4526C81.7515 36.1418 84.0961 41.7789 84.0961 48.3638C84.0961 54.9487 81.7515 60.5858 77.0622 65.2751C72.373 69.9643 66.7359 72.3089 60.151 72.3089Z" fill="#5D6BB7"/>
                </svg>

                <div className={style.escrito}>
                    <p><Link to ="/gerenciar-funcionario" style={{textDecoration: 'none', color: '#FFF'}}>Gerenciar Funcionários</Link></p>
                </div>
            </div>


        </section>

        
    </div>
  );
}

export default MenuAdministrador;