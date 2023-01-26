import {useParams} from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import articles from './article-content';
import Clock from '../components/Clock';

const ArticlePage = () => {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);


    if (!article) {
        return <NotFoundPage />
    }
    
    return (
        <>
        <Clock/>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        </>
    )
}


export default ArticlePage;