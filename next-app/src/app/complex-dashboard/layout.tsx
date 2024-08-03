const DashBoardLayout = ({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <>
      <div>{children}</div>
      <div className="flex  flex-wrap justify-center">
        <div className="flex flex-col">
          {users}
          {revenue}
        </div>
        {notifications}
      </div>
    </>
  ) : (
    login
  );
};

export default DashBoardLayout;
