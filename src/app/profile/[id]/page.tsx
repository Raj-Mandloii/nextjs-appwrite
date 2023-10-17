export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <p className="text-4xl">Profile Page</p>
      <hr className="mb-4"/>
      <h1>Profile <span className="bg-blue-500 p-2 rounded-xl m-4">{params.id}</span></h1>
    </div>
  );
}
