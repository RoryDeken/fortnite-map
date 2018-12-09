#!/bin/bash
set -B                  # enable brace expansion
for i in {0..36}; do
  for j in {0..36}; do
    for k in {2..6}; do
       curl -s -k 'GET' -H 'header info' -b 'stuff' "https://oyster.ignimgs.com//ignmedia//wikimaps//fortnite//season-7/$k/$j-$i.jpg" > $k$j$i.jpg
    done
  done
done
