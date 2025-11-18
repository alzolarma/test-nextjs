'use client';

import { Post } from "@/app/lib/types/post";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Buttom";
import { useEffect, useState } from "react";
import { StatusMessage } from "@/app/lib/types/validations";
import { createPost, editPost } from "@/app/lib/services/posts.service";
import { useRouter } from "next/navigation";
import { Messages } from "../molecules/Messages";
import { postSchema, PostValidationErrors } from "@/app/lib/schemas/posts";

const initialPostState: Post = {
  id: '',
  title: '',
  body: '',
};

export default function PostForm({ post }: { post: Post  | null | undefined }) {
  const router = useRouter(); 
  const [data, setData] = useState<Post>(post ?? initialPostState);

  const isEditing = !!data && !!data.id;
  const formTitle = isEditing ? "Editar Post" : "Crear Nuevo Post";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<StatusMessage | null>(null);
  const [validationErrors, setValidationErrors] = useState<PostValidationErrors>({});

  useEffect(() => {
    setData(post ?? initialPostState);
    setStatusMessage(null);
    setValidationErrors({});
}, [post]);

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setData(prev => ({ 
      ...prev, 
      [name as keyof Post]: value
  }));
  setStatusMessage(null); 
  if (validationErrors[name as keyof PostValidationErrors]) {
    setValidationErrors(prev => ({ 
        ...prev, 
        [name as keyof PostValidationErrors]: undefined 
    }));
  }
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setStatusMessage(null);
  setValidationErrors({});
  try {
      const validation = postSchema.safeParse(data);
      if (!validation.success) {
        const fieldErrors = validation.error.flatten().fieldErrors;
  
        setValidationErrors({
          title: fieldErrors.title?.[0],
          body: fieldErrors.body?.[0],
        });
  
        setStatusMessage({
          type: "error",
          message: "Por favor, revisa los campos con errores.",
        });
        return;
      }
      let result;
      if (!isEditing) {
        result = await createPost(data);
        if (!result) throw new Error("No se pudo crear el post.");
  
        setStatusMessage({
          type: "success",
          message: "Post creado correctamente.",
        });
      } else {
        result = await editPost(data.id, data);
        if (!result) throw new Error("No se pudo guardar el post.");
  
        setStatusMessage({
          type: "success",
          message: `Post [${result.id}] actualizado correctamente. Nuevo título: ${result.title}.`,
        });
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/dashboard/posts");
  } catch (error) {
      setStatusMessage({ 
          type: 'error', 
          message: (error as Error).message || "Ocurrió un error desconocido al guardar." 
      });
  } finally {
      setIsSubmitting(false);
  }
};

const handleGoBack = () => {
  router.push('/dashboard/posts');
};

  return (
    <form
      onSubmit={handleSubmit} 
      className="space-y-6 w-full p-4">
      
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{formTitle}</h2>
      {statusMessage && (
        <Messages
          type={statusMessage.type}
          title=""
          message={statusMessage.message}
        />
      )}
      <Input
        label="Título"
        name="title"
        type="text"
        value={data.title}
        onChange={handleChange}
        error={validationErrors.title} 
      />
      <Input
        label="Contenido"
        name="body"
        type="textarea"
        value={data.body}
        onChange={handleChange}
        error={validationErrors.body} 
      />
      <div className="flex gap-4 justify-end">
        <Button variant="ghost" type="button" customClasses="border" onClick={handleGoBack} >
          Volver
        </Button>
        <Button variant="primary" type="submit">
          {isSubmitting ? 'Guardando...' : (isEditing ? 'Guardar cambios' : 'Crear Post')}
        </Button>
      </div>
    </form>
  );
}