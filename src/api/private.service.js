import supabase from "./index";

const getSelectedAccount = async (id) => {
  const { data, error } = await supabase
    .from("account")
    .select("*")
    .eq("id", id)
    .single();
  if (data) return data;
  if (error) console.log(error);
};

const getAllCollabRequests = async (id) => {
  const { data: account, error: accountError } = await supabase
    .from("account")
    .select("*")
    .eq("id", id)
    .single();
  if (accountError) console.log(accountError);

  const { data, error } = await supabase
    .from("collaboration")
    .select("*")
    .eq("account_slug", account.slug);
  if (data) return data;
  if (error) console.log(error);
};

export { getSelectedAccount, getAllCollabRequests };
