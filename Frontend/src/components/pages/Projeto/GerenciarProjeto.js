import style from './GerenciarProjeto.module.css';
import {Link} from 'react-router-dom';
function GerenciarProjeto() {
  return (
    <div className= {style.janela}>

        <nav className={style.navbar}>
            <p>Gerenciar Projetos</p>
        </nav>

        <section className={style.primeiraJanela}>

            <div className={style.primeiraJanela1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="112" height="112" viewBox="0 0 112 112" fill="none">
                <path d="M56.0001 33.2501C51.5006 33.2501 47.1021 34.5843 43.3609 37.0841C39.6196 39.5839 36.7037 43.137 34.9818 47.294C33.2599 51.451 32.8094 56.0253 33.6872 60.4384C34.565 64.8514 36.7318 68.9051 39.9134 72.0867C43.0951 75.2684 47.1487 77.4351 51.5618 78.3129C55.9748 79.1907 60.5491 78.7402 64.7061 77.0183C68.8632 75.2964 72.4162 72.3805 74.916 68.6393C77.4158 64.8981 78.7501 60.4996 78.7501 56.0001C78.7431 49.9685 76.344 44.186 72.0791 39.9211C67.8141 35.6561 62.0316 33.257 56.0001 33.2501ZM56.0001 68.2501C53.5773 68.2501 51.2089 67.5316 49.1944 66.1856C47.1799 64.8395 45.6097 62.9263 44.6826 60.6879C43.7554 58.4495 43.5128 55.9865 43.9855 53.6102C44.4581 51.2339 45.6248 49.0512 47.338 47.338C49.0512 45.6248 51.234 44.4581 53.6102 43.9854C55.9865 43.5128 58.4496 43.7554 60.688 44.6825C62.9264 45.6097 64.8395 47.1798 66.1856 49.1943C67.5316 51.2088 68.2501 53.5772 68.2501 56.0001C68.2501 59.249 66.9595 62.3648 64.6622 64.6621C62.3648 66.9594 59.249 68.2501 56.0001 68.2501ZM96.2501 56.3457V55.6544L102.375 47.9938C102.889 47.3519 103.245 46.5982 103.415 45.7935C103.584 44.9887 103.562 44.1554 103.351 43.3607C102.245 39.1918 100.593 35.1874 98.4376 31.4519C98.0223 30.7396 97.445 30.1351 96.7526 29.6874C96.0602 29.2397 95.272 28.9614 94.452 28.8751L84.7045 27.7813L84.2188 27.2957L83.1251 17.5438C83.0381 16.7245 82.7595 15.9373 82.3118 15.2456C81.8641 14.554 81.26 13.9774 80.5482 13.5626C76.8124 11.3999 72.8065 9.74197 68.6351 8.63193C67.8397 8.42341 67.0064 8.40465 66.2024 8.57715C65.3984 8.74965 64.6462 9.10859 64.0063 9.62506L56.3457 15.7501H55.6545L47.9938 9.62506C47.352 9.11091 46.5983 8.75476 45.7935 8.58529C44.9887 8.41583 44.1554 8.4378 43.3607 8.64943C39.1907 9.76161 35.1863 11.421 31.452 13.5844C30.7424 13.9976 30.1396 14.5714 29.6921 15.2598C29.2446 15.9482 28.9647 16.732 28.8751 17.5482L27.7813 27.2957L27.2957 27.7813L17.5438 28.8751C16.7246 28.9621 15.9373 29.2407 15.2457 29.6883C14.554 30.136 13.9775 30.7402 13.5626 31.4519C11.406 35.1886 9.75397 39.1945 8.64946 43.3651C8.43855 44.1591 8.41695 44.9916 8.5864 45.7955C8.75585 46.5995 9.11162 47.3524 9.62508 47.9938L15.7501 55.6544V56.3457L9.62508 64.0063C9.11094 64.6482 8.75478 65.4019 8.58532 66.2066C8.41586 67.0114 8.43783 67.8447 8.64946 68.6394C9.76302 72.8097 11.4239 76.814 13.5888 80.5482C14.0016 81.2572 14.5747 81.8596 15.2623 82.3071C15.9499 82.7546 16.7328 83.0348 17.5482 83.1251L27.2957 84.2101L27.7813 84.6957L28.8751 94.4563C28.9621 95.2756 29.2407 96.0629 29.6884 96.7545C30.136 97.4461 30.7402 98.0227 31.452 98.4376C35.1877 100.6 39.1937 102.258 43.3651 103.368C44.1605 103.577 44.9938 103.595 45.7978 103.423C46.6017 103.25 47.354 102.892 47.9938 102.375L55.6545 96.2501H56.3457L64.0063 102.375C64.6482 102.889 65.4019 103.245 66.2067 103.415C67.0114 103.584 67.8448 103.562 68.6395 103.351C72.8084 102.245 76.8127 100.593 80.5482 98.4376C81.2594 98.0254 81.8639 97.452 82.313 96.7636C82.7621 96.0751 83.0433 95.2908 83.1338 94.4738L84.2188 84.7263L84.7045 84.2407L94.4563 83.1251C95.2733 83.0345 96.0576 82.7533 96.7461 82.3042C97.4345 81.8551 98.0079 81.2506 98.4201 80.5394C100.583 76.8036 102.241 72.7977 103.351 68.6263C103.56 67.8335 103.581 67.0027 103.412 66.2004C103.242 65.3981 102.887 64.6467 102.375 64.0063L96.2501 56.3457ZM85.6976 54.2063C85.7676 55.4011 85.7676 56.599 85.6976 57.7938C85.6194 59.0926 86.0263 60.3742 86.8395 61.3901L92.457 68.4119C91.9267 69.9816 91.2939 71.5147 90.5626 73.0013L81.6245 73.9944C80.3304 74.1424 79.1375 74.7661 78.2776 75.7444C77.4828 76.6398 76.6355 77.4872 75.7401 78.2819C74.7618 79.1418 74.138 80.3347 73.9901 81.6288L73.0013 90.5626C71.5149 91.2968 69.9818 91.9326 68.412 92.4657L61.3901 86.8438C60.4582 86.1003 59.301 85.696 58.1088 85.6976H57.7938C56.599 85.7676 55.4011 85.7676 54.2063 85.6976C52.9084 85.6207 51.6277 86.0257 50.6101 86.8351L43.5882 92.4569C42.0186 91.9267 40.4855 91.2938 38.9988 90.5626L38.0057 81.6244C37.8578 80.3304 37.234 79.1375 36.2557 78.2776C35.3603 77.4828 34.513 76.6355 33.7182 75.7401C32.8583 74.7617 31.6654 74.138 30.3713 73.9901L21.4376 73.0013C20.7033 71.5149 20.0676 69.9818 19.5345 68.4119L25.152 61.3901C25.9651 60.3742 26.372 59.0926 26.2938 57.7938C26.2238 56.599 26.2238 55.4011 26.2938 54.2063C26.372 52.9075 25.9651 51.6259 25.152 50.6101L19.5432 43.5882C20.0735 42.0186 20.7063 40.4855 21.4376 38.9988L30.3757 38.0057C31.6698 37.8577 32.8627 37.234 33.7226 36.2557C34.5174 35.3603 35.3647 34.5129 36.2601 33.7182C37.2384 32.8583 37.8621 31.6654 38.0101 30.3713L38.9988 21.4376C40.4853 20.7033 42.0184 20.0676 43.5882 19.5344L50.6101 25.1563C51.6277 25.9656 52.9084 26.3707 54.2063 26.2938C55.4011 26.2238 56.599 26.2238 57.7938 26.2938C59.0921 26.3732 60.3736 25.9679 61.3901 25.1563L68.412 19.5344C69.9818 20.0676 71.5149 20.7033 73.0013 21.4376L73.9945 30.3757C74.1424 31.6698 74.7662 32.8626 75.7445 33.7226C76.6399 34.5173 77.4872 35.3647 78.282 36.2601C79.1419 37.2384 80.3348 37.8621 81.6288 38.0101L90.5626 38.9988C91.2968 40.4852 91.9326 42.0183 92.4657 43.5882L86.8482 50.6101C86.032 51.6246 85.6219 52.9063 85.6976 54.2063Z" fill="#5D6BB7"/>
                </svg>
                <div className={style.escrito}>
                    <p><Link to ="/registro-projeto" style={{textDecoration: 'none', color: '#FFF'}}>Adicionar Projeto</Link></p>
                </div>
            </div>

            <div className={style.primeiraJanela1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="118" height="118" viewBox="0 0 118 118" fill="none">
                <path d="M29.887 44.3593H15.2479C12.564 44.3593 10.3682 42.1634 10.3682 39.4795C10.3682 36.7957 12.564 34.5998 15.2479 34.5998H29.887C32.5709 34.5998 34.7668 36.7957 34.7668 39.4795C34.7668 42.1634 32.5709 44.3593 29.887 44.3593ZM29.887 58.9984H15.2479C12.564 58.9984 10.3682 61.1943 10.3682 63.8781C10.3682 66.562 12.564 68.7578 15.2479 68.7578H29.887C32.5709 68.7578 34.7668 66.562 34.7668 63.8781C34.7668 61.1943 32.5709 58.9984 29.887 58.9984ZM97.6175 89.6918L82.3928 74.4671C78.1963 77.1998 73.1701 78.7613 67.7537 78.4685C56.1887 77.9317 46.2829 68.9042 44.7214 57.4369C44.206 53.6255 44.5967 49.7463 45.8615 46.1142C47.1264 42.482 49.2299 39.1993 52.0013 36.5325C54.7727 33.8657 58.1339 31.89 61.8119 30.7657C65.49 29.6414 69.3814 29.4002 73.1701 30.0617C82.6856 31.672 90.5907 39.0892 92.689 48.507C94.2993 55.6314 92.7378 62.2678 89.2732 67.5379L104.547 82.8114C106.45 84.7145 106.45 87.7887 104.547 89.6918C102.644 91.5949 99.5206 91.5949 97.6175 89.6918ZM83.5639 54.1187C83.5639 46.0672 76.9763 39.4795 68.9248 39.4795C60.8732 39.4795 54.2856 46.0672 54.2856 54.1187C54.2856 62.1702 60.8732 68.7578 68.9248 68.7578C76.9763 68.7578 83.5639 62.1702 83.5639 54.1187ZM15.2479 93.1564H54.2856C56.9695 93.1564 59.1653 90.9606 59.1653 88.2767C59.1653 85.5929 56.9695 83.397 54.2856 83.397H15.2479C12.564 83.397 10.3682 85.5929 10.3682 88.2767C10.3682 90.9606 12.564 93.1564 15.2479 93.1564Z" fill="#5D6BB7"/>
                </svg>
                <div className={style.escrito}><p>Buscar Projeto</p></div>
            </div>

            <div className={style.primeiraJanela1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="112" height="112" viewBox="0 0 112 112" fill="none">
                <g clip-path="url(#clip0_16_262)">
                 <path d="M102.667 19.9112L91.1554 8.40005C90.166 7.45669 88.8514 6.93042 87.4843 6.93042C86.1173 6.93042 84.8027 7.45669 83.8132 8.40005L73.5777 18.6667H18.6666C17.0163 18.6667 15.4337 19.3223 14.2668 20.4892C13.0999 21.6561 12.4443 23.2387 12.4443 24.8889V93.3334C12.4443 94.9836 13.0999 96.5663 14.2668 97.7332C15.4337 98.9001 17.0163 99.5556 18.6666 99.5556H87.111C88.7612 99.5556 90.3439 98.9001 91.5108 97.7332C92.6777 96.5663 93.3332 94.9836 93.3332 93.3334V36.5867L102.667 27.2534C103.639 26.2793 104.186 24.9589 104.186 23.5823C104.186 22.2057 103.639 20.8853 102.667 19.9112ZM58.5821 62.6267L45.5466 65.5201L48.6577 52.6089L78.3688 22.8356L88.4177 32.8845L58.5821 62.6267ZM91.7777 29.3378L81.7288 19.2889L87.4843 13.5334L97.5332 23.5823L91.7777 29.3378Z" fill="#5D6BB7"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_16_262">
                        <rect width="112" height="112" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                
                <div className={style.escrito}>
                    <p><Link to ="/atualizar-projeto" style={{textDecoration: 'none', color: '#FFF'}}>Atualizar Projeto</Link></p>
                </div>
            </div>

            <div className={style.primeiraJanela1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
                <path d="M30 95C30 97.6522 31.0536 100.196 32.9289 102.071C34.8043 103.946 37.3478 105 40 105H80C82.6522 105 85.1957 103.946 87.0711 102.071C88.9464 100.196 90 97.6522 90 95V35H30V95ZM40 45H80V95H40V45ZM77.5 20L72.5 15H47.5L42.5 20H25V30H95V20H77.5Z" fill="#5D6BB7"/>
                </svg>
                <div className={style.escrito}>
                    <p><Link to ="/exclusão" style={{textDecoration: 'none', color: '#FFF'}}>Excluir Projeto</Link></p>
                    </div>
            </div>


        </section>

        
    </div>
  );
}

export default GerenciarProjeto;