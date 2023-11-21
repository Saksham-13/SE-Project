
interface User {
  name: string;
  email: string;
  id:  number;
  phone : string;
}
async function getUsers() : Promise<User[]> {
  const res = await fetch("http://localhost:3000/api/User",{ cache: 'no-store' });

  const users = await res.json();
  
  return users;
  
}

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        users.map((user: User, index:number) => {
          return (
            <div key={index} className="flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-xl">{user.email}</p>
              {/* <p className="text-xl">{user.id}</p> */}
              <p className="text-xl">{user.phone}</p>

            </div>
          );
        })
      }
    </main>
  );
}
