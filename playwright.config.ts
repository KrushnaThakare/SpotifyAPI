import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  reporter: 'list',
  //testMatch: ["tests/app.spec.ts"],
  use: {
    headless: false,
    baseURL: "https://api.spotify.com/",
    extraHTTPHeaders: {
      Authorization: "Bearer BQBsQ9wgBSACgVAiOJ1_1xLNAoib8S0cVKTduPZ7L1NFv3Woo-gloVYrLAhfb_3N1ZwJ2GWYYLZktIRfYEQv78nDE0mGRu9zBDN2gp7tuJHm_H-39vvm9zjOPhPEvXGHKjoV3vZ9jeAF17l289-Cvu5suyzTZPihzpuV3QiDM_ErmSMQ9r_pCGgM6HLnbf1bHQiLOhctRp8xTDS7nYbrcj3NPlqASbfkeseFKJMLjBJosu9PQZIhraCZKb4l1C02"
    }


  }
};

export default config;