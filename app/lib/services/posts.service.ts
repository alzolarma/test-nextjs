export const BASE = "https://jsonplaceholder.typicode.com";
const API_LOCAL = "http://localhost:3000/api/posts";

export async function getPosts() {
  const res = await fetch(API_LOCAL, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch... posts");
  return res.json();
}

export async function getPost(id: string | number) {
  const res = await fetch(`${BASE}/posts/${id}`, {
      cache: "no-store" 
  });
  return res.json();
}

export async function createPost(payload: { title: string; body: string; userId?: number }) {
  const res = await fetch(API_LOCAL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Failed to create post");
  return res.json();
}

export async function editPost( id: string | number, payload: { title: string; body: string }) {
  const res = await fetch(`${BASE}/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create post");
  return res.json();
}

export async function deletePost( id: string | number) {
  const res = await fetch(`${BASE}/posts/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  });
  if (!res.ok) throw new Error("Failed to delete post");
  return res.json();
}