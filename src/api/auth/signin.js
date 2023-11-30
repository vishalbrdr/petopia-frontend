import axios from "axios";

export const signin = async ({ email, password }) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/signin`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};
