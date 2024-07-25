import Card from "@/components/card";
import Link from "next/link";

const Notifications = () => {
  return (
    <Card>
      <Link href={"/complex-dashboard/archived"}>Notifications</Link>
    </Card>
  );
};

export default Notifications;
