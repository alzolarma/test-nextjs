import { Post } from "@/app/lib/types/post";
import { Card } from "../molecules/Card";
import { CardHeader } from "../atoms/CardHeader";
import { CardBody } from "../atoms/CardBody";


export const PostCard = ({ post }: { post: Post }) => {
  const {title, body } = post;
  return (
      <Card className="border-0 shadow-none">
        <CardHeader>{title}</CardHeader>
        <CardBody>
            <p className="text-gray-600">{body}</p>
        </CardBody>
    </Card>
  );
};