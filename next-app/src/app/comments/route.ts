import { type NextRequest } from "next/server";
import { comments } from "./data";

const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? comments.filter(
        (comment) =>
          comment.text.includes(query) || String(comment.id).includes(query)
      )
    : comments;

  return Response.json(filteredComments);
};
const POST = async (request: Request) => {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };

  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "COntent-Type": "application/json",
    },
    status: 201,
  });
};

export { GET, POST };
