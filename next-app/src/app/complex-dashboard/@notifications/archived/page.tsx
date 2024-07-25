import Card from "@/components/card";
import Link from "next/link";

const ArchivedNotifications = () => {
  return (
    <Card>
      <Link href={"/complex-dashboard"}>Archived Notifications</Link>
    </Card>
  );
};

export default ArchivedNotifications;
