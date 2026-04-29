import { Container, getContainer } from "@cloudflare/containers";

export class DvwaContainer extends Container {
  defaultPort = 80;
  sleepAfter = "10m";
}

export default {
  async fetch(request: Request, env: any) {
    const containerInstance = getContainer(env.DVWA_CONTAINER, "dvwa-instance");

    try {
      return await containerInstance.fetch(request);
    } catch (e) {
      return new Response("Container is booting up. Please refresh in 5 seconds...", {
        status: 503
      });
    }
  },
};
