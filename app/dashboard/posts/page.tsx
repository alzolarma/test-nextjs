import PostsTemplate from "@/app/components/template/postTemplate";
import { getPosts } from "@/app/lib/services/posts.service";

export default async function PostsPage() {
    const posts = await getPosts();
    return (
        <>
            <h1 className="text-gray-900 text-xl"> Pagina de posts</h1>
            <div className="border-t border-gray-200 my-6"></div>
            <main>
                <PostsTemplate posts={posts}></PostsTemplate>
            </main>
        </>
    );
};