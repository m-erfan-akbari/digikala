import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function page() {
  return (
    <div className="h-[200vh]">
      <h2>Dashboard</h2>
      <LoginLink className="rounded-lg border border-blue-500 px-3 py-1 text-blue-500">
        Login
      </LoginLink>
      <LogoutLink className="rounded-lg border border-red-500 px-3 py-1 text-red-500">
        Logout
      </LogoutLink>
    </div>
  );
}
