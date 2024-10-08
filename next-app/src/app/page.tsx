import Link from "next/link";

const Home = () => (
  <>
    <h1>Welcome home</h1>
    <Link href={"/blog"}>Blog</Link>
    <Link href={"/products"}>Products</Link>
    <Link href={"/dashboard"}>DashBoard</Link>
  </>
);

export default Home;
