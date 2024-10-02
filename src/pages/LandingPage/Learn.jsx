import { Card } from 'primereact/card';
import './Learn.css';

const articles = [
    {
        title: 'All About Investing in NFTs and Related Risks',
        description: 'A comprehensive guide on the risks and rewards of investing in NFTs.',
        category: 'CRYPTO BASIC',
        image: 'https://miro.medium.com/max/1400/1*p7kvxyykG3bVNSnpOjwqgA.jpeg',
                link: 'https://www.investopedia.com/non-fungible-tokens-nft-5115211',
    },
    {
        title: 'What is Cryptocurrency? All You Need to Know',
        description: 'Cryptocurrencies are basically digital assets secured by cryptography.',
        category: 'CRYPTO BASIC',
        image: 'https://cdn.britannica.com/94/234894-050-4621EA90/Bitcoin-symbol.jpg',
        link: 'https://www.investopedia.com/terms/c/cryptocurrency.asp',
    },
    {
        title: 'Can Crypto Replace Your Bank Account?',
        description: 'From direct deposit to earning yield, crypto could replace traditional banking.',
        category: 'CRYPTO BASIC',
        image: 'https://thumbor.forbes.com/thumbor/fit-in/960x720/filters:format(jpg)/https://www.forbes.com/advisor/wp-content/uploads/2021/06/cryptobank-featured.jpg',
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