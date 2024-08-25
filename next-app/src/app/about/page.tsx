import { cookies } from "next/headers";

const About = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme?.value);

  console.log("About Server Components");
  return <h1>About Page {new Date().toLocaleTimeString()}</h1>;
};

export default About;
