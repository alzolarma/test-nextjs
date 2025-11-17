'use client';

import Link from "next/link";
import { TablePosts } from "../organism/TablePost";
import { useState } from "react";
import { PostConfirmModal } from "../organism/PostConfirmModal";
import { StatusMessage } from "@/app/lib/types/validations";
import { Messages } from "../molecules/Messages";
import { Post } from "@/app/lib/types/post";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function PostsTemplate({ posts }: { posts: any[] }) {
    const [postsData, setPostsData] = useState<Post[]>(posts);
    const [postIdToDelete, setPostIdToDelete] = useState<number | null>(null);
    const [statusMessage, setStatusMessage] = useState<StatusMessage | ''>('');
    
    const handleDeletionSuccess = (deletedId: number, message: string) => {
        setPostsData(prevPosts => prevPosts.filter(p => p.id !== deletedId));
        setPostIdToDelete(null);
        setStatusMessage({ type: 'success', message: message });
    };

    const handleDeletionError = (message: string) => {
        setStatusMessage({ type: 'error', message:message});
        setPostIdToDelete(null);
    };
    
    const mapped = postsData.map((p: any) => ({
        id: p.id,
        title: p.title,
        actions: (
            <div className="flex gap-3">
                <Link className="text-blue-600 hover:underline" href={`/dashboard/posts/${p.id}`}  >
                    Ver
                </Link>
                <Link className="text-blue-600 hover:underline" href={`/dashboard/posts/${p.id}/edit`}  >
                    Editar
                </Link>
                <Link className="text-blue-600 hover:underline" href={`#`}  onClick={() => setPostIdToDelete(p.id)}  >
                    Eliminar
                </Link>
            </div>
        )
    }));

    return (
        <section className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Gestión de Posts</h1>

                <Link className= "px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700" href={`/dashboard/posts/create`}  >
                    Crear Post
                </Link>
            </div>
            { 
                statusMessage && statusMessage.type === 'success' && (
                    <Messages type={"success"} message={statusMessage.message}></Messages>
                )
            }

            <TablePosts data={mapped} />

            {postIdToDelete !== null && (
                <PostConfirmModal
                    postId={postIdToDelete}
                    onClose={() => setPostIdToDelete(null)}
                    onSuccess={handleDeletionSuccess}
                    onError={handleDeletionError}
                />
            )}

        </section>
    );
}

