import styles from '@/styles/components/layout.module.css';
import LogoStudioWox from '@/pages/assets/svg/1_mono_negativo.svg';
import LogoStudioWox2 from '@/pages/assets/svg/2_color2.svg';
import MoneyBook from '@/pages/assets/svg/noun-money-book-3119916.svg';
import RealTimeBidding from '@/pages/assets/svg/noun-real-time-bidding-1790281.svg';
import Ribbon from '@/pages/assets/svg/noun-ribbon-619885.svg';
import Timer from '@/pages/assets/svg/noun-timer-2513124.svg';
import Header from './header';
import Footer from './footer';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.page}>
            <Header>
                <div className="d-flex justify-content-center py-4">
                    <Link href="/" aria-label="Studio Wox Logo" className="d-block" style={{ cursor: 'pointer' }}>
                        <LogoStudioWox />
                    </Link>
                </div>
            </Header>

            <main className="w-100 flex-grow-1">{children}</main>

            <Footer>
                <section className={`w-100 p-5 d-flex justify-content-center ${styles['layout-section-footer']}`}>
                    <div className="row container d-flex justify-content-center" style={{ gap: '60px 0' }}>
                        <div className="col-sm-6 col-md-4 col-lg p-sm-0">
                            <Link href="/" aria-label="Studio Wox Logo 2" className={`d-block ${styles['cursor-pointer']}`}>
                                <LogoStudioWox2 style={{ width: '100%', height: 'auto' }} />
                            </Link>
                        </div>

                        <nav className="col-sm-6 col-md-4 col-lg d-flex flex-column">
                            <div className="mb-4">
                                <h4 className={`text-white ${styles['min-height-itens']}`}>Principais tipos de imóveis</h4>
                                <hr className={styles.line} />
                            </div>

                            <ul className={`d-flex flex-column ${styles['gap-itens']} ${styles['no-list-style']}`}>
                                <li>
                                    <a href="#" className={`text-light user-select-auto ${styles['cursor-pointer']}`}>
                                        Apartamentos prontos
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className={`text-light user-select-auto ${styles['cursor-pointer']}`}>
                                        Apartamentos na planta
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className={`text-light user-select-auto ${styles['cursor-pointer']}`}>
                                        Salas comerciais à venda
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className={`text-light user-select-auto ${styles['cursor-pointer']}`}>
                                        Salas comerciais prontas
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className={`text-light user-select-auto ${styles['cursor-pointer']}`}>
                                        Lajes corporativas à venda
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <nav className="col-sm-6 col-md-4 col-lg d-flex flex-column">
                            <div className="mb-4">
                                <h4 className={`text-white ${styles['min-height-itens']}`}>Principais bairros</h4>
                                <hr className={styles.line} />
                            </div>

                            <ul className={`d-flex flex-column ${styles['gap-itens']} ${styles['no-list-style']}`}>
                                <li>
                                    <a href="#" className={`text-light user-select-auto ${styles['cursor-pointer']}`}>
                                        Jardins
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className={`text-light user-select-auto ${styles['cursor-pointer']}`}>
                                        Pinheiros
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className={`text-light user-select-auto ${styles['cursor-pointer']}`}>
                                        Morumbi
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className={`text-light user-select-auto ${styles['cursor-pointer']}`}>
                                        Alphaville
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={`text-light user-select-auto ${styles['cursor-pointer']}`}>
                                        Mooca
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <nav className="col-sm-6 col-md-4 col-lg d-flex flex-column">
                            <div className="mb-4">
                                <h4 className={`text-white ${styles['min-height-itens']}`}>Imóveis por cidade</h4>
                                <hr className={styles.line} />
                            </div>

                            <ul className={`d-flex flex-column ${styles['gap-itens']} ${styles['no-list-style']}`}>
                                <li>
                                    <a href="#" className={`text-light user-select-auto ${styles['cursor-pointer']}`}>
                                        São Paulo
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className={`text-light user-select-auto ${styles['cursor-pointer']}`}>
                                        São José dos Campos
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className={`text-light user-select-auto ${styles['cursor-pointer']}`}>
                                        Curitiba
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className={`text-light user-select-auto ${styles['cursor-pointer']}`}>
                                        Goiânia
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className={`text-light user-select-auto ${styles['cursor-pointer']}`}>
                                        Campinas
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>

                <section className={`d-flex justify-content-center align-items-center ${styles['min-heigh-footer']}`}>
                    <div className="row container d-flex align-items-center justify-content-center py-3 p-lg-0" style={{ gap: '20px 0px' }}>
                        <article className={`col-md-4 col-sm-6 col-lg text-white d-flex justify-content-center align-items-center ${styles['custom-height-56']}`}>
                            <MoneyBook />
                            <p className="m-0 pl-2 font-weight-bold">Parcelas fixas durante a obra</p>
                        </article>

                        <hr className={`${styles['line-vertical']} d-none d-md-block`} />

                        <article className={`col-md-4 col-sm-6 col-lg text-white d-flex justify-content-center align-items-center ${styles['custom-height-56']}`}>
                            <RealTimeBidding />
                            <p className="m-0 pl-2 font-weight-bold">Compra 100% digital</p>
                        </article>

                        <hr className={`${styles['line-vertical']} d-none d-md-block`} />

                        <article className={`col-md-4 col-sm-6 col-lg text-white d-flex justify-content-center align-items-center ${styles['custom-height-56']}`}>
                            <Timer />
                            <p className="m-0 pl-2 font-weight-bold">Fast dating</p>
                        </article>

                        <hr className={`${styles['line-vertical']} d-none d-lg-block`} />

                        <article className={`col-md-4 col-sm-6 col-lg text-white d-flex justify-content-center align-items-center ${styles['custom-height-56']}`}>
                            <Ribbon />
                            <p className="m-0 pl-2 font-weight-bold">Prêmios</p>
                        </article>
                    </div>
                </section>
            </Footer>
        </div>
    );
}
