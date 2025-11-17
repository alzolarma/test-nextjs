import { Messages } from "@/app/components/molecules/Messages";
import { PostCard } from "@/app/components/organism/PostCard";
import { getPost } from "@/app/lib/services/posts.service";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function EditPostPage({ params }: any) {
  const { id } = await params;
  const post = await getPost(id);
  const isEmpty = !post || Object.keys(post).length === 0;

  return (
    <div className="flex flex-col">
      <h1 className="text-gray-900 text-xl"> Ver Post</h1>
      <div className="border-t border-gray-200 my-6"></div>
      <div className="flex flex-col min-h-screen w-full items-start justify-start p-4 sm:p-16 sm:items-start bg-white">
        {!isEmpty ? (
          <PostCard post={post} />
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
