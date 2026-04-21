export default async function handler(req: any, res: any) {
  const { default: app } = await import("../artifacts/tryps-landing/server.js");
  app(req, res);
}
