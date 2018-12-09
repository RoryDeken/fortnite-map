set -B                  # enable brace expansion
for i in {0..7}
  do
  for j in {0..7}
    do
      curl -s -k 'GET' -H 'header info' -b 'stuff' "https://oyster.ignimgs.com//ignmedia//wikimaps//fortnite//season-7/3/$i-$j.jpg" > $i$j.jpg
  done
done
