import { Post } from "@/app/lib/types/post";
import { Card, CardBody, CardHeader } from "../molecules/Card";


export const PostCard = ({ post }: { post: Post }) => {
  const {title, body } = post;
  return (
      <Card>
        <CardHeader>Post Details</CardHeader>
        <CardBody>
            <h3 className="text-md font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{body}</p>
        </CardBody>
    </Card>
  );
};