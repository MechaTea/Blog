import ArticlesList from '../components/ArticlesList';
import Clock from '../components/Clock';
import articles from './article-content';


const ArticlesListPage = () => {
    return (
        <>
        <Clock/>
        <ArticlesList articles={articles} />
        </>
    );
}

export default ArticlesListPage;