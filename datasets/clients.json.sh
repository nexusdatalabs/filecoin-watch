#!/usr/bin/env bash

duckdb :memory: << EOF
SET enable_progress_bar = false;
COPY (
  SELECT
    *
  FROM read_parquet('https://data.filecoindataportal.xyz/filecoin_clients.parquet')
) TO STDOUT (FORMAT 'JSON', ARRAY true);
EOF
