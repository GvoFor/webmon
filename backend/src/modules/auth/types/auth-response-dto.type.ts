type AuthResponseDTO = {
  token: string;
  user: {
    id: number;
    email: string;
  };
};

export { type AuthResponseDTO };
