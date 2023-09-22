import supabase from "./index";

const regist = async ({ email, password, name }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });
  if (data) console.log(data);
  if (error) console.log(error);
};

const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (data) return data;
  if (error) console.log(error);
};

const getProfileBySlug = async (slug) => {
  const { data, error } = await supabase
    .from("account")
    .select("*")
    .eq("slug", slug)
    .single();
  if (data) return data;
  if (error) console.log(error);
};

const getContentsByAccountId = async (accountId) => {
  const { data, error } = await supabase
    .from("content")
    .select("*")
    .eq("account", accountId);
  if (data) return data;
  if (error) console.log(error);
};

const getDetailContentBySlugAndId = async (slug, contentId) => {
  const { data: account, error: accountError } = await supabase
    .from("account")
    .select("*")
    .eq("slug", slug)
    .single();
  if (accountError) console.log(accountError);
  const accountId = account.id;

  const { data, error } = await supabase
    .from("content")
    .select("*")
    .eq("account", accountId)
    .eq("id", contentId)
    .single();
  if (data) return data;
  if (error) console.log(error);
};

export {
  regist,
  login,
  getProfileBySlug,
  getContentsByAccountId,
  getDetailContentBySlugAndId,
};
