"use client";

import { useTripPlanner } from "@/hooks/useTripPlanner";

const ExampleHook = () => {
  const { mutate, data } = useTripPlanner();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const location = formData.get("location") as string;
    const type = formData.get("type") as string;
    const lang = formData.get("lang") as string;
    mutate.mutate({ location, type, lang });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="location" placeholder="Location" />
        <input type="text" name="type" placeholder="Type" />
        <input type="text" name="lang" placeholder="Language" />
        <button type="submit">Submit</button>
      </form>

      {mutate.isPending && <div>Loading...</div>}
      {mutate.isError && <div>Error: {mutate.error.message}</div>}

      <div>
        {data?.data?.timeline?.map((item) => (
          <div key={item.day}>
            <h3>{item.day}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      {mutate.isSuccess && <div>Success: {JSON.stringify(data)}</div>}
    </div>
  );
};

export default ExampleHook;
