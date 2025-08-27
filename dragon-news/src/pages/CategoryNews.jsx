import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
    const { data: news } = useLoaderData();
    console.log(news);
    return (
        <div>
            <h4 className="text-xl font-semibold mb-3">Dragon News Home</h4>
            <p className="text-gray-400 text-sm">{news.length} News Found In This Category.</p>
            <div>
                {
                    news.map((singleNews) => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;