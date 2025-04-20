class APIService {
  async getTemp(): Promise<number | undefined> {
    try {
      const res = await fetch("/api/temp");
      const data: { temp: number } = await res.json();
      return data.temp;
    } catch (err: any) {
      console.error(err.message || err);
      return undefined;
    }
  }
}

const apiService = new APIService();

export default apiService;
