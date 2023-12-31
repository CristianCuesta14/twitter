import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: posts } = await supabase.from("posts").select();
  console.log(posts);

  return (
    <main>
      Hola
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </main>
  );
}
