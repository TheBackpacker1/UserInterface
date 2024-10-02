import { Card } from 'primereact/card';
import './Learn.css';

const articles = [
    {
        title: 'All About Investing in NFTs and Related Risks',
        description: 'A comprehensive guide on the risks and rewards of investing in NFTs.',
        category: 'CRYPTO BASIC',
        image: 'https://media.istockphoto.com/id/1367699775/fr/photo/nft-jetons-non-fongibles-pi%C3%A8ces-dor-tombant-crypto-monnaies-et-pi%C3%A8ces-%C3%A0-la-mode-sur-la.jpg?b=1&s=612x612&w=0&k=20&c=Hc95qTr3ZdYFicoWZESpZkYC0dDVFu9Goq6Vva5Dtqc=',
                link: 'https://www.investopedia.com/non-fungible-tokens-nft-5115211',
    },
    {
        title: 'What is Cryptocurrency? All You Need to Know',
        description: 'Cryptocurrencies are basically digital assets secured by cryptography.',
        category: 'CRYPTO BASIC',
        image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: 'https://www.investopedia.com/terms/c/cryptocurrency.asp',
    },
    {
        title: 'Can Crypto Replace Your Bank Account?',
        description: 'From direct deposit to earning yield, crypto could replace traditional banking.',
        category: 'CRYPTO BASIC',
        image: 'https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: 'https://www.forbes.com/advisor/investing/cryptocurrency-replace-bank-account/',
    }
];

const LearnSection = () => {
    return (
        <div className='learn-section'>
            <h2>Learn About Cryptocurrency</h2>
            <p>Learn all about cryptocurrency to start investing</p>
            <div className="article-grid">
                {articles.map((article, index) => (
                    <Card key={index} className="article-card" title={article.title} subTitle={article.category} header={<img alt="Card" src={article.image} className="article-image" />}>
                        <p>{article.description}</p>
                        <a href={article.link} target="_blank" rel="noopener noreferrer" className="learn-more-link">
                            Learn More
                        </a>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default LearnSection;