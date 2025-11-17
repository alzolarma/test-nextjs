import { Messages } from "@/app/components/molecules/Messages";
import PostForm from "@/app/components/organism/PostForm";
import { getPost } from "@/app/lib/services/posts.service";

export default async function EditPostPage({ params }: any) {
  const { id } = await params;
  
  const post = await getPost(id);
  const isEmpty = !post || Object.keys(post).length === 0;

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-gray-900 text-xl"> Editar Post</h1>
      <div className="border-t border-gray-200 my-6"></div>
      <div className="flex flex-col min-h-screen w-full items-start justify-start px-4 ms:px-16 sm:items-start bg-white">  
      {!isEmpty ? (
          <PostForm post={post} />
        ) : (
          <div className="w-full mt-4 flex items-center justify-center">
            <Messages type="error" message=" No se ha encontrado ningún resultado." >
            </Messages>
          </div>
        )}
      </div>
    </div>
  );
}
