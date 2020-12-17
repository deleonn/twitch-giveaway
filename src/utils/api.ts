import axios from "axios";

export const api = axios.create({
  timeout: 10000,
});

const client_id = process.env.REACT_APP_TWITCH_CLIENT_ID;
const redirect_uri = process.env.REACT_APP_TWITCH_REDIRECT_URI;
const response_type = "token";
const scope = "channel:read:subscriptions user:read:email";

export const twitchAuthFlowURI = `https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`;

interface ValidateAuthTokenResponse {
  client_id: string;
  expires_in: number;
  login: string;
  scopes: Array<string>;
  user_id: string;
}

export const validateAuthToken = async (
  access_token: string
): Promise<ValidateAuthTokenResponse> => {
  const response = await api.get("https://id.twitch.tv/oauth2/validate", {
    headers: {
      Authorization: `OAuth ${access_token}`,
    },
  });

  return response.data;
};

export interface FollowersResponse {
  total: number;
  data: Array<Follower>;
  pagination: {
    cursor: string;
  };
}

export interface Follower {
  from_id: string;
  from_name: string;
  to_id: string;
  to_name: string;
  followed_at: string;
}

export const getFollowers = async (
  user_id: string,
  token: string
): Promise<FollowersResponse> => {
  const response = await api.get("https://api.twitch.tv/helix/users/follows", {
    params: {
      to_id: user_id,
      first: 100,
    },
    headers: {
      Authorization: `Bearer ${token}`,
      "Client-Id": client_id,
    },
  });

  return response.data;
};
