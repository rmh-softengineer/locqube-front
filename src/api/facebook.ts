import { FacebookPost } from "../model/facebookPost";

const sharePost = async (post: FacebookPost) => {
    const response = await fetch('http://localhost:8080/share-fb-post', {
        method: 'POST',
        body: JSON.stringify(post)
    })
    return response.json()
}

export { sharePost }