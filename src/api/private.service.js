import supabase from "./index";

const getSelectedAccount = async (id) => {
  const { data, error } = await supabase.from("account").select().eq("id", id);
  if (data) return data;
  if (error) console.log(error);
};

export { getSelectedAccount };
