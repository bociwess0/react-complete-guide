import { useRouter } from 'next/router'

function DetailsPage () {

    const router = useRouter();

    console.log(router.query.newsId); //getting access to all elements in the path when the page is loaded (number of paths = number of laods)

    return <h1>The Details Page</h1>
}

export default DetailsPage;