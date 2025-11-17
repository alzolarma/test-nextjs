'use client';

import { deletePost } from "@/app/lib/services/posts.service";
import { useState } from "react";
import { ConfirmationDialog } from "../molecules/ConfirmationDialog";
import { ExclamationCircleIcon } from "@heroicons/react/16/solid";

interface PostConfirmModalProps {
  postId: number;
  onClose: () => void;
  onSuccess: (deletedId: number, message: string) => void;
  onError: (message: string) => void;
}

export const PostConfirmModal = ({ postId, onClose, onSuccess, onError }: PostConfirmModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleDeletion = async () => {
      setIsLoading(true);
      try {
          await deletePost(postId);
          onSuccess(postId, `El Post ID ${postId} ha sido eliminado con éxito.`);
      } catch (error) {
          const message = (error instanceof Error ? error.message : "Error desconocido al intentar eliminar el post.");
          onError(message);
      } finally {
          setIsLoading(false);
      }
  };

  return (
    <div 
        className="fixed inset-0 bg-transparent z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity"
        aria-modal="true" 
        role="dialog"
    >
       <ConfirmationDialog
              title={`Eliminar Post ${postId}`}
              message={`Estás seguro de que deseas eliminar permanentemente el Post con ID ${postId}? Esta acción no se puede deshacer.`}
              icon={<ExclamationCircleIcon className="w-8 h-8" />}
              onCancel={onClose}
              onConfirm={handleDeletion}
              isLoading={isLoading}
          />
    </div>
  );
};