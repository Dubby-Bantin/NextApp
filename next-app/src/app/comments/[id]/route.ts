import { comments } from "../data";
import { redirect } from "next/navigation";
const GET = async (
  _request: Request,
  { params: { id } }: { params: { id: string } }
) => {
  const comment = comments.find((c) => c.id === Number(id));
  Number(id) > comments.length && redirect("/comments");

  return Response.json(comment);
};

const PATCH = async (
  request: Request,
  { params: { id } }: { params: { id: string } }
) => {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex((c) => c.id === Number(id));
  comments[index].text = text;

  return Response.json(comments[index]);
};
const DELETE = async (
  _request: Request,
  { params: { id } }: { params: { id: string } }
) => {
  const index = comments.findIndex((c) => c.id === Number(id));
  const deletedComment = comments[index];
  comments.splice(index, 1);
  return Response.json(deletedComment);
};

export { GET, PATCH, DELETE };
