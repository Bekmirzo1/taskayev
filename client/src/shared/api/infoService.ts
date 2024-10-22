import type { InfoDto } from "./dto/info";
// import { $authHost, $host } from "./hosts";
const { $host, $hostAuth } = useNuxtApp();
class InfoService {
  private host: typeof $host | null;
  private hostAuth: typeof $hostAuth | null;
  constructor() {
    this.host = null;
    this.hostAuth = null;
  }
  private hostInit() {
    if (this.host == null) {
      this.host = useNuxtApp().$host;
    }
  }
  private hostAuthInit() {
    if (this.hostAuth == null) {
      this.hostAuth = useNuxtApp().$hostAuth;
    }
  }
  async showInfo(): Promise<InfoDto> {
    this.hostInit();
    try {
      const data = await this.host<InfoDto>("/info", { method: "GET" });
      return data;
    } catch (error: any) {
      console.log(error);
    }
  }
  async showInfoInit(): Promise<InfoDto> {
    this.hostInit();
    try {
      const { data } = await useAsyncData("index", () =>
        this.host<InfoDto>("/info", { method: "GET" }),
      );
      return data.value;
    } catch (error: any) {
      console.log(error);
    }
  }
  async changeInfo(value: FormData): Promise<InfoDto> {
    this.hostAuthInit();
    try {
      const data = await this.hostAuth<InfoDto>("/info", {
        method: "post",
        body: value,
      });
      return data;
    } catch (error: any) {
      console.log(error);
    }
  }
}

export default new InfoService();
