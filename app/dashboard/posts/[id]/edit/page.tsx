import PostForm from "@/app/components/organism/PostForm";
import { getPost } from "@/app/lib/services/posts.service";

export default async function EditPostPage({ params }: any) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <div className="flex flex-col">
      <h1 className="text-gray-900 text-xl"> Editar Post</h1>
      <div className="border-t border-gray-200 my-6"></div>
      <div className="flex flex-col min-h-screen w-full items-start justify-start p-16 rounded-md shadow sm:items-start bg-white">  
        <PostForm post={post}/>
      </div>
    </div>
  );
}
