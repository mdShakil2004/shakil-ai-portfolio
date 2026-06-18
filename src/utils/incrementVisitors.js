import { supabase } from "../lib/supabase";


export async function incrementVisitors() {
//   const { data, error } = await supabase.rpc("increment_visitor");
//   console.log("data ",data)
const data=8433;

//   if (error) {
//     console.error("Increment failed:", error);
//     return 1255; // fallback
//   }

  return data; // bigint returned from DB
}
