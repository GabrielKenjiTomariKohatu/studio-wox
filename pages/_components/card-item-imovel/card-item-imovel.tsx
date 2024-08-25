import React from 'react';
import CamaIcon from '@/pages/assets/svg/CAMA2.svg';
import MetroIcon from '@/pages/assets/svg/METROS.svg';
import { ImovelRes } from '../../../shared/entity/Props/ImovelRes';

export default function CardItemImovel({ nome, imagem, cidade, uf, bairro, dormitorios, metragens }: ImovelRes): JSX.Element {
    const dormitorio: string = Array.isArray(dormitorios) && dormitorios.length > 0 ? (dormitorios.length > 1 ? `${dormitorios[0]} e ${dormitorios[1]}` : `${dormitorios[0]}`) : '';

    const metragem: string = Array.isArray(metragens) && metragens.length > 0 ? (metragens.length > 1 ? `${metragens[0]} e ${metragens[1]}` : `${metragens[0]}`) : '';

    return (
        <article>
            <figure>
                <img src={imagem} alt={`Imagem do Imóvel ${nome}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </figure>

            <header>
                <p className="mb-1 font-weight-light">
                    {cidade} / {uf}
                </p>
                <h4 className="mb-1" style={{ color: '#484848' }}>
                    {bairro}
                </h4>
                <p className="mb-1 font-weight-light">{nome}</p>
            </header>

            <section className="d-flex">
                <CamaIcon />
                <p className="mb-0 ml-2 font-weight-light">{dormitorio} dormitórios</p>
            </section>

            <section className="d-flex">
                <MetroIcon />
                <p className="mb-0 ml-2 font-weight-light">{metragem} m²</p>
            </section>
        </article>
    );
}
