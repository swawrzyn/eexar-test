
      declare module "comlink-shared:./game-worker" {
        const mod: () => import("comlink").Remote<typeof import("./src/components/game-worker")>
        export default mod
      }

      declare module "comlink-sw:./game-worker" {
        const mod: () => {sw: import("comlink").Remote<typeof import("./src/components/game-worker")>}
        export default mod
      }

      declare module "comlink:./game-worker" {
        const mod: () => import("comlink").Remote<typeof import("./src/components/game-worker")>
        export default mod
      }