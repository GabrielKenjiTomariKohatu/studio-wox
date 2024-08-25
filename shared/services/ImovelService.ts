import { GetServerSideProps } from 'next';
import axios from 'axios';
import { ImoveisRes } from '@/pages';

const getServerSideProps: GetServerSideProps<ImoveisRes> = async () => {
    try {
        const apiUrl = process.env.API_URL;

        const response = await axios.get(`${apiUrl}/avaliacao/frontend/imoveis`);
        const imoveis = response.data.imoveis;
        return {
            props: {
                imoveis
            }
        };
    } catch (error) {
        console.error('Error fetching imoveis:', error);
        return {
            props: {
                imoveis: []
            }
        };
    }
};

export default getServerSideProps;
