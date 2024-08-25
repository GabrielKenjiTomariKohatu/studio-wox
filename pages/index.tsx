import { useState } from 'react';
import { InferGetServerSidePropsType } from 'next';
import { ImovelRes } from '../shared/entity/Props/ImovelRes';
import Layout from './_components/_layout/layout';
import Dropdown from './_components/_elements/drop-down/drop-down';
import CardItemImovel from './_components/card-item-imovel/card-item-imovel';
import InputRange from './_components/_elements/input/input-range/input-range';
import Button from './_components/_elements/button/button';
import ItemFilter from './_components/item-filter/item-filter';
import styles from '../styles/components/home.module.css';
import Carousel from './_components/_elements/carousel/carousel';
import getServerSideProps from '../shared/services/ImovelService';
import { contents } from '../utils/json/carousel-image';
import { images } from '../utils/json/carousel-content';

export interface ImoveisRes {
    imoveis: ImovelRes[];
}

export default function Home({ imoveis }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const maiorMetragem: number = Math.max(...imoveis.flatMap(imovel => imovel.metragens));
    const [activeIndex, setActiveIndex] = useState(0);

    const [selectedBairros, setSelectedBairros] = useState<string[]>([]);
    const nomeBairroList = Array.from(new Set(imoveis.map(imovel => imovel.bairro)));

    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(maiorMetragem);
    const [filteredImoveis, setFilteredImoveis] = useState(imoveis);

    const handleIndexChange = (index: number) => {
        setActiveIndex(index);
    };

    const handleToggleBairro = (bairro: string) => {
        setSelectedBairros(prevSelected => {
            if (prevSelected.includes(bairro)) {
                return prevSelected.filter(b => b !== bairro);
            } else {
                return [...prevSelected, bairro];
            }
        });
    };

    const handleFilter = () => {
        const novosImoveis = imoveis.filter(imovel => {
            const filterMetragem = imovel.metragens.some(metragem => metragem >= minValue && metragem <= maxValue);
            const filterBairro = selectedBairros.length === 0 || selectedBairros.includes(imovel.bairro);
            return filterMetragem && filterBairro;
        });
        setFilteredImoveis(novosImoveis);
    };

    const handleClearFilter = () => {
        setMinValue(0);
        setMaxValue(maiorMetragem);
        setFilteredImoveis(imoveis);
        setSelectedBairros([]);
    };

    return (
        <Layout>
            <section>
                <Carousel imagesBackground={images} contents={contents} activeIndex={activeIndex} onIndexChange={handleIndexChange}>
                    <div className="container d-flex flex-column" style={{ zIndex: 2, gap: 32 }}>
                        <div className="d-flex align-items-end" style={{ gap: 10 }}>
                            <div className={`${activeIndex == 0 ? styles.lineRed : styles.lineAqua}`}></div>
                            <h4 className="text-white text-uppercase mb-0">{contents[activeIndex].title}</h4>
                        </div>

                        <h1 className="text-white font-weight-light" style={{ maxWidth: 500 }}>
                            {contents[activeIndex].subTitle} <b className=" font-weight-bold">{contents[activeIndex].subTitleApt}</b>
                        </h1>

                        <div className="d-flex align-items-center" style={{ gap: 40 }}>
                            <div className="d-flex flex-column">
                                <p className="text-white mb-0  font-weight-light" style={{ fontSize: 14 }}>
                                    {contents[activeIndex].aptSuiteDescription}
                                </p>
                                <h5 className="text-white font-weight-bold">{contents[activeIndex].aptSuite}</h5>
                            </div>

                            <div className={styles.line}></div>

                            <div className="d-flex flex-column">
                                <p className="text-white mb-0  font-weight-light" style={{ fontSize: 14 }}>
                                    {contents[activeIndex].plantDescription}
                                </p>
                                <h5 className="text-white font-weight-bold">{contents[activeIndex].plantValue}</h5>
                            </div>

                            {activeIndex == 0 && <div className={styles.line}></div>}

                            <div className="d-flex flex-column">
                                <p className="text-white mb-0  font-weight-light" style={{ fontSize: 14 }}>
                                    {contents[activeIndex].priceDescription}
                                </p>
                                <h5 className="text-white font-weight-bold">{contents[activeIndex].priceValue}</h5>
                            </div>
                        </div>

                        {activeIndex == 1 && (
                            <div
                                className="text-white text-center d-flex align-items-center justify-content-center "
                                style={{
                                    padding: 10,
                                    maxWidth: 320,
                                    backgroundColor: '#42B9BD',
                                    borderTopRightRadius: 10,
                                    borderBottomRightRadius: 10
                                }}
                            >
                                <b className="mr-1">PARCELAS FIXAS</b> <p className="mb-0 font-weight-light">DURANTE A OBRA</p>
                            </div>
                        )}
                    </div>
                </Carousel>
            </section>

            <section className="container flex-grow-1 d-flex align-items-center flex-column" style={{ gap: 32 }}>
                <article className="w-100">
                    <div>
                        <h4>Conheça nossos imóveis à venda</h4>

                        <div className="d-flex flex-column flex-md-row justify-content-between">
                            <p>Conforto, alta qualidade e a localização que você sempre quis. Encontre o seu imóvel.</p>

                            <div className="d-flex w-full justify-content-end" style={{ gap: 10 }}>
                                <Dropdown label="Bairro">
                                    <div className="d-flex flex-column" style={{ gap: 28 }}>
                                        {nomeBairroList.map((nome, index) => {
                                            return <ItemFilter key={index} name={nome} isSelected={selectedBairros.includes(nome)} onToggle={handleToggleBairro}></ItemFilter>;
                                        })}

                                        <div className="d-flex justify-content-between">
                                            <Button type="basic" onClick={handleClearFilter}>
                                                Limpar
                                            </Button>

                                            <Button type="flat" onClick={handleFilter}>
                                                Filtrar
                                            </Button>
                                        </div>
                                    </div>
                                </Dropdown>

                                <Dropdown label="Metragem">
                                    <div className="d-flex flex-column" style={{ gap: 32 }}>
                                        <InputRange maxRange={maiorMetragem} onMinChange={setMinValue} onMaxChange={setMaxValue} minValue={minValue} maxValue={maxValue} />

                                        <div className="d-flex justify-content-between">
                                            <Button type="basic" onClick={handleClearFilter}>
                                                Limpar
                                            </Button>

                                            <Button type="flat" onClick={handleFilter}>
                                                Filtrar
                                            </Button>
                                        </div>
                                    </div>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="w-100 pb-5">
                    <div className="row justify-content-start">
                        {filteredImoveis.length === 0 ? (
                            <div className="text-center w-100 h-100">
                                <p className="text-muted p-5">Não há imóveis disponíveis.</p>
                            </div>
                        ) : (
                            filteredImoveis.map((imovel, index) => (
                                <div key={index} className={`col-6 col-md-${filteredImoveis.length == 1 ? '6' : '4'} col-lg-${filteredImoveis.length == 1 ? '3' : '3'} mb-4`}>
                                    <CardItemImovel nome={imovel.nome} imagem={imovel.imagem} cidade={imovel.cidade} bairro={imovel.bairro} uf={imovel.uf} dormitorios={imovel.dormitorios} metragens={imovel.metragens} />
                                </div>
                            ))
                        )}
                    </div>
                </article>
            </section>
        </Layout>
    );
}

export { getServerSideProps };
