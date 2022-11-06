import { useParams } from "react-router-dom";

const QuoteDetail = () => {
    
    const { quoteId } = useParams();

    return <div>
        {quoteId}
    </div>
}

export default QuoteDetail;