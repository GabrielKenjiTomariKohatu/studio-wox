import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import styles from '@/pages/_components/_elements/carousel/carousel.module.css';

export interface CarouselImage {
    src: StaticImageData;
    alt: string;
}

export interface CarouselContent {
    title: string;
    subTitle: string;
    subTitleApt: string;
    aptSuiteDescription: string;
    aptSuite: string;
    plantDescription?: string;
    plantValue?: string;
    priceDescription?: string;
    priceValue?: string;
}

interface CarouselProps {
    imagesBackground: CarouselImage[];
    contents: CarouselContent[];
    children?: React.ReactNode;
    activeIndex: number;
    onIndexChange?: (index: number) => void;
}

export default function Carousel({ imagesBackground = [], children, activeIndex: initialIndex, onIndexChange }: CarouselProps): JSX.Element {
    const [activeIndex, setActiveIndex] = useState(initialIndex);

    useEffect(() => {
        if (!Array.isArray(imagesBackground) || imagesBackground.length === 0) return;

        const interval = setInterval(() => {
            setActiveIndex(prevIndex => {
                const newIndex = prevIndex === imagesBackground.length - 1 ? 0 : prevIndex + 1;
                if (onIndexChange) {
                    onIndexChange(newIndex);
                }
                return newIndex;
            });
        }, 15000);

        return () => clearInterval(interval);
    }, [imagesBackground, onIndexChange]);

    const goToSlide = (index: number) => {
        setActiveIndex(index);
        if (onIndexChange) {
            onIndexChange(index);
        }
    };

    const prevSlide = () => {
        setActiveIndex(prevIndex => {
            const newIndex = prevIndex === 0 ? imagesBackground.length - 1 : prevIndex - 1;
            if (onIndexChange) {
                onIndexChange(newIndex);
            }
            return newIndex;
        });
    };

    const nextSlide = () => {
        setActiveIndex(prevIndex => {
            const newIndex = prevIndex === imagesBackground.length - 1 ? 0 : prevIndex + 1;
            if (onIndexChange) {
                onIndexChange(newIndex);
            }
            return newIndex;
        });
    };

    return (
        <>
            <div className={`carousel slide ${styles['carousel-container']}`}>
                <div className={styles['carousel-inner']} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                    {imagesBackground.map((image, index) => (
                        <div key={index} className={styles['carousel-item']}>
                            <Image className={styles['carousel-image']} src={image.src} alt={image.alt} layout="fill" draggable="false" />
                        </div>
                    ))}
                </div>

                <article className="position-absolute d-flex justify-content-center align-items-center h-100" style={{ width: '100vw' }}>
                    {children}
                </article>

                <div className={styles.overlay}></div>

                <a className={`carousel-control-prev ${styles['control-prev']} d-none d-sm-flex`} role="button" onClick={prevSlide}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>

                <a className={`carousel-control-next ${styles['control-next']} d-none d-sm-flex`} role="button" onClick={nextSlide}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <ol className={`w-100 d-flex justify-content-center align-items-center pt-3 pb-5 ${styles['no-list-style']}`}>
                {imagesBackground.map((_, index) => (
                    <li
                        key={index}
                        className={`${styles['carousel-dot']} ${index === activeIndex ? styles['carousel-dot-active'] : ''}`}
                        onClick={() => goToSlide(index)}
                        style={{
                            backgroundColor: index === activeIndex ? '#CC3333' : '#c4c4c4'
                        }}
                    ></li>
                ))}
            </ol>
        </>
    );
}
