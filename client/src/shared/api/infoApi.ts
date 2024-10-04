import type { InfoDto } from "./dto/info";
import { $authHost, $host } from "./hosts";
const { $apiAuth, $apiAuth2 } = useNuxtApp();
export class InfoService {
  static async showInfo(): Promise<InfoDto> {
    try {
      const { data } = await useAsyncData("index", () =>
        $apiAuth2<InfoDto>("api/info", { method: "GET" }),
      );
      return data.value;
    } catch (error: any) {
      console.log(error);
    }
  }
  static async showInfo2(): Promise<InfoDto> {
    try {
      const {data} = await useAPI<InfoDto>("/api/info", { method: "GET" });
      return data.value;
    } catch (error: any) {
      console.log(error);
    }
  }
}
