type arr = {
  name: string;
  age: number;
  course: string;
};

const arr: arr[] = [
  { name: "Dubby", age: 16, course: "ADSE" },
  { name: "Zeketo", age: 20, course: "ADSE" },
  { name: "Codex", age: 24, course: "ADSE" },
];

const GET = async () => {
  return new Response("DashBoard data");
};
export { GET };
