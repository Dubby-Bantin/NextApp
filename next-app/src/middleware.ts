import { NextResponse, type NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  console.log(themePreference);

  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custom-value");
  return response;
  // if (request.nextUrl.pathname === "/profile") {
  //   return NextResponse.redirect(new URL("/hello", request.url));
  // return NextResponse.rewrite(new URL("/hello", request.url));
  // }
};

// export const config = {
//   matcher: "/profile",
// };
