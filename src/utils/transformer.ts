/**
 * `Temporal.Instant` や `Temporal.Date`、`Decimal.js` などの特殊なデータ型のトランスフォーマーを追加する必要がある場合は、ここで追加する
 * `superjson` を直接インポートするのではなく、必ずこのファイルをインポートしてください。
 * @https://github.com/blitz-js/superjson#recipes を参照
 */

import superjson from "superjson";

export const transformer = superjson;
