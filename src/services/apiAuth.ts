import http from "@/utils/http";

export const login = async (phone_number: string) => {
  const res = await http({
    method: "POST",
    url: "api/user/register_or_login_user",
    data: phone_number,
  });
  const data = await res.json();
  return data;
};
