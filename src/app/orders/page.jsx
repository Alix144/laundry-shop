import UserInfoCard from "@/components/UserInfoCard";

export default function Orders() {
  return (
    <main className="w-screen">
      <section className="pt-28 content bg-background">
        <h1 className="mb-5 text-center">My orders</h1>
        <div className="flext gap-1 items-start justify-center">
          <UserInfoCard />

        </div>
      </section>
    </main>
  );
}
