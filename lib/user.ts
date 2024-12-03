import { supabase } from "./supabase";
const { data } = await supabase.auth.getUser();
const user_data = data.user;

console.log(user_data);

export default user_data;
