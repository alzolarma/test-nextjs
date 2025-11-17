export let memoryPosts: any[] = [];

export function addMemoryPost(post: any) {
  memoryPosts.unshift(post);
}

export function getMemoryPosts() {
  return memoryPosts;
}
