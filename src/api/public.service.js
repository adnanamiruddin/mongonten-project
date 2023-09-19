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

export { regist, login };
