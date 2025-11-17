import { Post } from "../lib/types/post";

export const memoryPosts: Post[] = [];

export function addMemoryPost(post: Post) {
  memoryPosts.unshift(post);
}

export function getMemoryPosts() {
  return memoryPosts;
}
