import PostForm from "@/app/components/organism/PostForm";

export default async function CreatePostPage() {
  return (
    <div className="flex flex-col">
      <h1 className="text-gray-900 text-xl"> Crear Nuevo Post</h1>
      <div className="border-t border-gray-200 my-6"></div>
      <div className="flex flex-col min-h-screen w-full items-start justify-start px-4 ms:px-16 sm:items-start bg-white">  
        <PostForm post={null}/>
      </div>
    </div>
  );
}
