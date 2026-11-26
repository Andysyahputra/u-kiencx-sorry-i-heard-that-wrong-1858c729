# Sorry, I Heard That Wrong

[![make.fun](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729.svg)](https://make.fun/competitions/u-kiencx-sorry-i-heard-that-wrong-1858c729)
[![rank](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729/Andysyahputra/u-kiencx-sorry-i-heard-that-wrong-1858c729/rank.svg)](https://make.fun/competitions/u-kiencx-sorry-i-heard-that-wrong-1858c729)
[![reward](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729/Andysyahputra/u-kiencx-sorry-i-heard-that-wrong-1858c729/reward.svg)](https://make.fun/competitions/u-kiencx-sorry-i-heard-that-wrong-1858c729)

A [make.fun](https://make.fun/competitions/u-kiencx-sorry-i-heard-that-wrong-1858c729) entry: a program that writes the funniest one-line apology a smart speaker gives after mishearing its owner (at most 140 characters) to `/output/entry.txt`.

Run it with Node 22:

```sh
node main.ts
```

`main.ts` is TypeScript using only the Node standard library. It writes the entry deterministically on every run — no network, no secrets, no files read outside the repo — and refuses to write if the entry falls outside the 1–140 character gate.
